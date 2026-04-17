import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "sportiq_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (value: "all" | "essential") => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-6 left-6 z-50 w-[450px] rounded-2xl border border-border/50 bg-[hsl(222,47%,11%)] p-5 shadow-elevated text-white"
        >
          <button
            onClick={() => accept("essential")}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <Cookie className="h-5 w-5 text-accent" />
            <span className="font-heading font-semibold text-sm text-foreground">Cookie Preferences</span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            We use cookies to enhance your experience, analyze traffic, and personalize content. You can choose to accept all cookies or only essential ones.
          </p>

          <div className="flex gap-2">
            <Button
              onClick={() => accept("all")}
              size="sm"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 text-xs"
            >
              Accept All
            </Button>
            <Button
              onClick={() => accept("essential")}
              variant="outline"
              size="sm"
              className="flex-1 text-xs text-foreground hover:text-foreground"
            >
              Essential Only
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
