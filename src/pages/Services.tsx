import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Zap, Users, Globe, TrendingUp, Cpu, Database, Cloud } from "lucide-react";

export const services = [
  { 
    icon: BarChart3, 
    title: "Performance Analytics", 
    desc: "Real-time tracking, biomechanics, and predictive modeling for athletes and teams. AI-powered insights for coaching decisions.", 
    features: ["GPS & sensor integration", "Video analysis AI", "Injury prediction", "Custom dashboards"],
    image: "/src/assets/Product/product (1).jpg"
  },
  { 
    icon: Shield, 
    title: "Team Management Platform", 
    desc: "Complete operational suite for roster management, scheduling, and team communication.", 
    features: ["Roster & contract management", "Training schedule automation", "Medical record tracking", "Compliance tools"],
    image: "/src/assets/Product/product (2).jpg"
  },
  { 
    icon: Zap, 
    title: "Live Data Infrastructure", 
    desc: "High-performance data pipelines delivering real-time sports data at scale.", 
    features: ["Sub-50ms latency", "99.99% uptime SLA", "Custom data feeds", "WebSocket & REST APIs"],
    image: "/src/assets/Product/product (3).jpg"
  },
  { 
    icon: Users, 
    title: "Fan Engagement Suite", 
    desc: "Digital-first fan experiences from ticketing to loyalty programs and interactive content.", 
    features: ["Digital ticketing", "Loyalty & rewards", "Second-screen experiences", "Social integration"],
    image: "/src/assets/Product/product (4).jpg"
  },
  { 
    icon: Globe, 
    title: "League & Tournament Ops", 
    desc: "End-to-end management for leagues, tournaments, and sporting events of any size.", 
    features: ["Fixture scheduling", "Referee management", "Broadcasting tools", "Result automation"],
    image: "/src/assets/Product/product (5).jpg"
  },
  { 
    icon: TrendingUp, 
    title: "Sports Betting APIs", 
    desc: "Regulated, reliable data feeds for licensed betting operators and media companies.", 
    features: ["Real-time odds feeds", "Integrity monitoring", "Regulatory compliance", "Historical data access"],
    image: "/src/assets/Product/product (6).jpg"
  },
  { 
    icon: Cpu, 
    title: "AI & Machine Learning", 
    desc: "Custom AI models for scouting, match prediction, and strategic analysis.", 
    features: ["Player scouting AI", "Match outcome models", "Transfer valuation", "Tactical analysis"],
    image: "/src/assets/Product/product (7).jpg"
  },
  { 
    icon: Database, 
    title: "Data Warehousing", 
    desc: "Centralized sports data lakes with powerful query and visualization capabilities.", 
    features: ["Unified data model", "Cross-sport schema", "Custom ETL pipelines", "BI integrations"],
    image: "/src/assets/Product/product (8).jpg"
  },
  { 
    icon: Cloud, 
    title: "Cloud Infrastructure", 
    desc: "Scalable, secure cloud hosting optimized for sports technology workloads.", 
    features: ["Auto-scaling", "Global CDN", "SOC 2 compliant", "Disaster recovery"],
    image: "/src/assets/Product/product (9).jpg"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Services() {
  return (
    <Layout>
      <section className="py-32 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/service.jpg" 
            alt="Services background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">Services</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            What We <span className="text-gradient">Build</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            From analytics platforms to fan engagement — we deliver full-stack sports technology solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const slug = s.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link 
                  key={s.title}
                  to={`/services/${slug}`}
                  className="block"
                >
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="p-0 rounded-lg border bg-card hover:shadow-elevated transition-all group overflow-hidden cursor-pointer h-full"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={s.image} 
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <s.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-heading font-semibold text-card-foreground text-lg mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <ul className="space-y-1.5">
                        {s.features.map((f) => (
                          <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-xs text-accent font-medium flex items-center gap-1">
                          Learn more
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading label="Ready?" title="Let's Build Something Great" description="Tell us about your project and we'll show you how Sportiq can help." />
          <Link to="/contact">
              
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-accent font-semibold">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
