import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-32 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/contact.jpg" 
            alt="Contact us background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">Contact</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-heading font-semibold text-foreground mb-4 text-2xl">Get in Touch</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Whether you're a startup or enterprise, we'll help you find the right solution. Our team responds within 24 hours.
                </p>
              </motion.div>
              {[
                { icon: Mail, label: "Email", value: "hello@sportiq.io", desc: "General inquiries" },
                { icon: Phone, label: "Phone", value: "+46 8 123 4567", desc: "Mon-Fri, 9AM-5PM CET" },
                { icon: Send, label: "Telegram", value: "@sportiq_support", desc: "Quick support" },
                { icon: MapPin, label: "Office", value: "Kungsgatan 12, Stockholm", desc: "Visit us" },
              ].map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-accent/5 hover:border-accent/20 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0 group-hover:from-accent/20 group-hover:to-accent/10 transition-all">
                    <c.icon className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">{c.label}</span>
                      <div className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent/50"></div>
                    </div>
                    <p className="text-sm text-foreground font-medium group-hover:text-accent transition-colors">{c.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 p-8 rounded-xl border bg-card/50 backdrop-blur-sm space-y-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span>Name</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                  </label>
                  <Input 
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    placeholder="John Doe" 
                    required 
                    className="border-accent/10 focus:border-accent/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span>Email</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                  </label>
                  <Input 
                    type="email" 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    placeholder="john@team.com" 
                    required 
                    className="border-accent/10 focus:border-accent/30 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span>Company</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/30"></div>
                </label>
                <Input 
                  value={form.company} 
                  onChange={(e) => setForm({ ...form, company: e.target.value })} 
                  placeholder="Your organization" 
                  className="border-accent/10 focus:border-accent/30 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span>Message</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                </label>
                <Textarea 
                  value={form.message} 
                  onChange={(e) => setForm({ ...form, message: e.target.value })} 
                  placeholder="Tell us about your project, goals, and timeline..." 
                  rows={5} 
                  required 
                  className="border-accent/10 focus:border-accent/30 transition-colors min-h-[120px]"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >  
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground from-accent to-accent/90  hover:from-accent/90 hover:to-accent/80 font-semibold px-10 py-7 text-base shadow-2xl hover:shadow-3xl transition-all duration-300">
                
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
              <p className="text-xs text-muted-foreground text-center pt-4 border-t border-accent/5">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
