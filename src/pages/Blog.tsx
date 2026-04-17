import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  { slug: "ai-sports-analytics", title: "How AI is Revolutionizing Sports Analytics in 2026", excerpt: "From computer vision to predictive modeling, artificial intelligence is transforming how teams analyze performance.", category: "AI & Analytics", date: "Apr 10, 2026", readTime: "6 min" },
  { slug: "real-time-data", title: "Building Real-Time Sports Data Pipelines at Scale", excerpt: "A deep dive into the architecture behind sub-50ms latency data streaming for live sporting events.", category: "Engineering", date: "Mar 28, 2026", readTime: "8 min" },
  { slug: "fan-engagement", title: "The Future of Fan Engagement: Beyond the Stadium", excerpt: "How digital-first strategies are creating immersive fan experiences that extend far beyond game day.", category: "Fan Tech", date: "Mar 15, 2026", readTime: "5 min" },
  { slug: "sports-betting-regulation", title: "Navigating Sports Betting Data Regulations in Europe", excerpt: "A comprehensive guide to data integrity, licensing requirements, and compliance across European markets.", category: "Regulation", date: "Mar 3, 2026", readTime: "7 min" },
  { slug: "wearable-tech", title: "Wearable Technology: The Next Frontier in Athlete Monitoring", excerpt: "How IoT sensors and wearable devices are providing unprecedented insights into athlete health and performance.", category: "Hardware", date: "Feb 20, 2026", readTime: "5 min" },
  { slug: "cloud-sports", title: "Why Sports Organizations Are Moving to the Cloud", excerpt: "The business case for cloud-native infrastructure in modern sports technology stacks.", category: "Infrastructure", date: "Feb 8, 2026", readTime: "4 min" },
  { slug: "blockchain-sports", title: "Blockchain in Sports: From Ticketing to Athlete Contracts", excerpt: "How distributed ledger technology is revolutionizing sports management, ticketing, and athlete contracts.", category: "Emerging Tech", date: "Jan 25, 2026", readTime: "7 min" },
  { slug: "esports-infrastructure", title: "The IT Infrastructure Powering Professional Esports", excerpt: "Behind the scenes of the massive data centers and networking infrastructure that make competitive gaming possible.", category: "Infrastructure", date: "Jan 18, 2026", readTime: "6 min" },
  { slug: "vr-training", title: "Virtual Reality Training: The Next Generation of Athlete Development", excerpt: "How VR simulations are helping athletes practice in hyper-realistic environments without physical risk.", category: "Training Tech", date: "Jan 10, 2026", readTime: "5 min" },
  { slug: "data-privacy-sports", title: "Data Privacy Challenges in Modern Sports Technology", excerpt: "Navigating GDPR, CCPA, and other regulations while collecting athlete biometric data.", category: "Security", date: "Dec 28, 2025", readTime: "8 min" },
  { slug: "iot-stadiums", title: "Smart Stadiums: How IoT is Transforming Live Sports Experiences", excerpt: "From connected seats to real-time concession ordering, IoT is creating smarter, more efficient stadiums.", category: "IoT", date: "Dec 15, 2025", readTime: "6 min" },
  { slug: "machine-learning-injuries", title: "Machine Learning for Injury Prevention in Professional Sports", excerpt: "How ML algorithms analyze biomechanical data to predict and prevent athlete injuries before they happen.", category: "AI & Health", date: "Dec 5, 2025", readTime: "7 min" },
  { slug: "5g-sports-broadcasting", title: "5G's Impact on Live Sports Broadcasting and Streaming", excerpt: "How ultra-low latency 5G networks are enabling new forms of interactive sports content and multi-angle viewing.", category: "Broadcasting", date: "Nov 22, 2025", readTime: "5 min" },
  { slug: "edge-computing-sports", title: "Edge Computing at Sporting Events: Processing Data Where It's Created", excerpt: "Why sports organizations are deploying edge computing solutions directly in stadiums and arenas.", category: "Infrastructure", date: "Nov 10, 2025", readTime: "6 min" },
  { slug: "quantum-computing-sports", title: "Quantum Computing's Potential Impact on Sports Strategy", excerpt: "How quantum algorithms could solve complex optimization problems in sports scheduling and strategy.", category: "Future Tech", date: "Oct 28, 2025", readTime: "8 min" },
  { slug: "cybersecurity-sports", title: "Cybersecurity Threats in the Sports Industry: Protecting Digital Assets", excerpt: "Understanding the unique cybersecurity challenges facing sports organizations in the digital age.", category: "Security", date: "Oct 15, 2025", readTime: "7 min" },
  { slug: "api-first-sports", title: "API-First Architecture: Building Scalable Sports Platforms", excerpt: "How modern sports tech companies are designing their systems around API-first principles for maximum flexibility.", category: "Engineering", date: "Oct 5, 2025", readTime: "6 min" },
  { slug: "computer-vision-refereeing", title: "Computer Vision in Sports Officiating: The End of Human Error?", excerpt: "How AI-powered computer vision systems are assisting referees and umpires in making more accurate calls.", category: "AI & Officiating", date: "Sep 22, 2025", readTime: "5 min" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Blog() {
  return (
    <Layout>
      <section className="py-32 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/blog.jpg" 
            alt="Blog background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">Blog</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Insights & <span className="text-gradient">Ideas</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Exploring the intersection of technology and sports: AI, data science, infrastructure, and the future of athletic performance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {posts.map((p, i) => (
                <motion.article
                  key={p.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-lg border bg-card overflow-hidden hover:shadow-elevated transition-shadow group"
                >
                  <Link to={`/blog/${p.slug}`} className="block">
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {p.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {p.readTime}
                        </span>
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          {p.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-card-foreground text-xl mb-3 group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Full Article <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
