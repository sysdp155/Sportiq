import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok || !resp.body) {
    if (resp.status === 429) { onError("Too many requests. Please wait a moment."); return; }
    if (resp.status === 402) { onError("AI service temporarily unavailable."); return; }
    onError("Something went wrong. Please try again.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: streamDone, value } = await reader.read();
    if (streamDone) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const parsed = JSON.parse(json);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }
  onDone();
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: upsert,
        onDone: () => setLoading(false),
        onError: (msg) => {
          setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
          setLoading(false);
        },
      });
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection error. Please try again." }]);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setOpen(true)}
              size="icon"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-[hsl(222 60% 30%)] to-[hsl(222 60% 30%)] text-white hover:from-[hsl(222 60% 75%)] hover:to-[hsl(168,80%,35%)] shadow-2xl shadow-[hsl(168,80%,42%)]/40 hover:shadow-[hsl(168,80%,42%)]/60 transition-all duration-300 hover:scale-80 hover:rotate-12 group animate-pulse-subtle"
            >
              <MessageCircle className="h-7 w-7 group-hover:scale-80 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(168,80%,42%)]/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[560px] flex flex-col rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl shadow-black/50 overflow-hidden text-white backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[hsl(168,80%,42%)] to-[hsl(168,80%,30%)] flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-heading font-semibold text-sm">Sportiq Assistant</span>
                  <p className="text-xs text-gray-400">AI-powered support</p>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-80 hover:rotate-90 group"
              >
                <X className="h-4 w-4 group-hover:scale-80 transition-transform duration-300" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-[320px] bg-gradient-to-b from-gray-900/50 to-gray-950/50">
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[hsl(168,80%,42%)]/20 to-[hsl(168,80%,30%)]/20 flex items-center justify-center mx-auto mb-3 border border-gray-800">
                    <Bot className="h-8 w-8 text-[hsl(168,80%,42%)]" />
                  </div>
                  <p className="text-gray-300 font-medium mb-1">Hi! I'm your Sportiq Assistant</p>
                  <p className="text-gray-500 text-sm">How can I help you today?</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "assistant" && (
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-[hsl(168,80%,42%)]/20 to-[hsl(168,80%,30%)]/20 flex items-center justify-center border border-gray-800">
                      <Bot className="h-4 w-4 text-[hsl(168,80%,42%)]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-[hsl(168,80%,42%)] to-[hsl(168,80%,30%)] text-white shadow-lg shadow-[hsl(168,80%,42%)]/20"
                        : "bg-gray-800/80 text-gray-200 border border-gray-700 backdrop-blur-sm"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:m-0 [&>ul]:m-0 [&>ol]:m-0 text-gray-200">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <div className="text-white">{m.content}</div>
                    )}
                  </div>
                  {m.role === "user" && (
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-gray-700">
                      <User className="h-4 w-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
              {loading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-[hsl(168,80%,42%)]/20 to-[hsl(168,80%,30%)]/20 flex items-center justify-center border border-gray-800">
                    <Bot className="h-4 w-4 text-[hsl(168,80%,42%)]" />
                  </div>
                  <div className="bg-gray-800/80 rounded-2xl px-4 py-3 text-sm text-gray-400 border border-gray-700 backdrop-blur-sm">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-[hsl(168,80%,42%)] animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-[hsl(168,80%,42%)] animate-pulse delay-150"></div>
                      <div className="h-2 w-2 rounded-full bg-[hsl(168,80%,42%)] animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-800 px-4 py-3 bg-gray-900/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                    placeholder="Ask me anything about Sportiq…"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[hsl(168,80%,42%)] focus:ring-1 focus:ring-[hsl(168,80%,42%)]/30 transition-all"
                    disabled={loading}
                  />
                  {input.trim() && (
                    <button
                      onClick={() => setInput("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-all duration-300 hover:scale-80"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={send}
                  disabled={loading || !input.trim()}
                  className="h-12 w-12 rounded-xl bg-gradient-to-br from-[hsl(168,80%,42%)] to-[hsl(168,80%,30%)] text-white flex items-center justify-center hover:from-[hsl(168,80%,45%)] hover:to-[hsl(168,80%,35%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-80 hover:shadow-xl hover:shadow-[hsl(168,80%,42%)]/30 group shadow-lg shadow-[hsl(168,80%,42%)]/20"
                >
                  <Send className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Sportiq Assistant • Powered by AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
