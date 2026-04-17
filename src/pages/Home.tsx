import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Zap, Users, Globe, TrendingUp, CheckCircle, Award } from "lucide-react";
import SportsIconsMarquee from "@/components/SportsIconsMarquee";
import heroBg from "@/assets/hero-bg.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const stats = [
  { value: "200+", label: "Sports Teams" },
  { value: "50M+", label: "Data Points Daily" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "35+", label: "Countries" },
];

const features = [
  { icon: BarChart3, title: "Performance Analytics", desc: "Real-time athlete tracking, biomechanics analysis, and predictive performance modeling." },
  { icon: Shield, title: "Team Management", desc: "Roster planning, scheduling, communication tools, and compliance management." },
  { icon: Zap, title: "Live Data Streaming", desc: "Sub-second latency data pipelines for in-game decision support systems." },
  { icon: Users, title: "Fan Engagement", desc: "Digital ticketing, loyalty programs, and personalized fan experience platforms." },
  { icon: Globe, title: "League Operations", desc: "Tournament management, officiating tools, and broadcasting integrations." },
  { icon: TrendingUp, title: "Sports Betting APIs", desc: "Regulated data feeds, odds calculation engines, and integrity monitoring." },
];



export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-10 px-0 relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Sports technology visualization" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent"></div>
        </div>
        
        {/* Professional background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/8 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-accent/3 blur-3xl animate-pulse delay-500"></div>
          
          {/* Grid overlay for professional look */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/25 backdrop-blur-md border border-accent/25 mb-10 shadow-lg"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-glow"></div>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">Enterprise Sports Technology Platform</span>
              </motion.div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8 tracking-tight">
                <span className="block">The Intelligence Platform</span>
                <span className="text-gradient bg-clip-text bg-gradient-to-r from-accent via-accent/95 to-accent/85">
                  For Modern Sports
                </span>
              </h1>
              
              <p className="text-primary-foreground/95 text-xl leading-relaxed mb-12 max-w-xl font-light">
                Enterprise-grade software solutions that transform how sports organizations analyze performance, engage fans, and operate at global scale with AI-powered intelligence.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">
                  
                    <Button size="lg" className="bg-primary text-primary-foreground from-accent to-accent/90  hover:from-accent/90 hover:to-accent/80 font-semibold px-10 py-7 text-base shadow-2xl hover:shadow-3xl transition-all duration-300">
                      <span className="flex items-center gap-3">
                        Request Enterprise Demo
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="bg-background/40 backdrop-blur-md border-accent/40 text-white hover:bg-background/60 hover:border-accent/60 px-10 py-7 text-base shadow-xl hover:shadow-2xl border-2">
                      <span className="flex items-center gap-3">
                        Platform Overview
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Professional trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap items-center gap-10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/25 border-2 border-background shadow-md"></div>
                    <div className="w-10 h-10 rounded-full bg-accent/35 border-2 border-background shadow-md"></div>
                    <div className="w-10 h-10 rounded-full bg-accent/45 border-2 border-background shadow-md"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">Trusted by 200+ Teams</div>
                    <div className="text-xs text-primary-foreground/70">Global sports organizations</div>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-primary-foreground/25"></div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-glow"></div>
                    <span className="text-sm font-medium text-primary-foreground/90">99.9% Uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-glow"></div>
                    <span className="text-sm font-medium text-primary-foreground/90">SOC 2 Type II Certified</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero visual with professional dashboard preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
             
              
              {/* Floating professional metrics */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-background/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/25"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-sm font-semibold text-foreground">Platform Uptime</div>
                  <div className="text-xs text-muted-foreground mt-1">Last 30 days</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/25"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50M+</div>
                  <div className="text-sm font-semibold text-foreground">Data Points</div>
                  <div className="text-xs text-muted-foreground mt-1">Processed daily</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos - Professional Section */}
      <section className="py-20 bg-background/90 backdrop-blur-md border-y border-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 mb-6">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Official Technology Partners</span>
            </div>
            
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Global Sports Leaders
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              We are proud to be the official technology partner for the world's most prestigious sports organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            {[
              { 
                name: "Premier League", 
                color: "text-purple-600", 
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500/20",
                officialText: "Official Technology Partner"
              },
              { 
                name: "NBA", 
                color: "text-orange-600", 
                bgColor: "bg-orange-500/10",
                borderColor: "border-orange-500/20",
                officialText: "Official Analytics Partner"
              },
              { 
                name: "UEFA", 
                color: "text-blue-600", 
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/20",
                officialText: "Official Data Partner"
              },
              { 
                name: "FIFA", 
                color: "text-green-600", 
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500/20",
                officialText: "Official Technology Partner"
              },
              { 
                name: "NFL", 
                color: "text-red-600", 
                bgColor: "bg-red-500/10",
                borderColor: "border-red-500/20",
                officialText: "Official Analytics Partner"
              },
              { 
                name: "MLB", 
                color: "text-cyan-600", 
                bgColor: "bg-cyan-500/10",
                borderColor: "border-cyan-500/20",
                officialText: "Official Data Partner"
              },
            ].map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className={`p-6 rounded-2xl ${client.bgColor} border ${client.borderColor} hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  <div className="h-20 flex items-center justify-center mb-4">
                    <div className={`text-3xl font-bold ${client.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300 tracking-tight`}>
                      {client.name}
                    </div>
                  </div>
                  
                  {/* Official Partner Badge */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                    </div>
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-accent/15">
                        <CheckCircle className="h-3 w-3 text-accent" />
                        <span className="text-xs font-semibold text-accent tracking-wide">
                          {client.officialText}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
          
       
        </div>
      </section>

      {/* Stats */}
      <section className="py-0 bg-gradient-to-b from-background via-card to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></div>
                    <div className="font-heading text-4xl md:text-5xl font-bold text-accent tracking-tight">{s.value}</div>
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
                  <div className="mt-4 pt-3 border-t border-accent/5 group-hover:border-accent/20 transition-colors">
                    <div className="text-xs text-muted-foreground/70 group-hover:text-accent/70 transition-colors">
                      Global Impact
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <SportsIconsMarquee />
      

      {/* Features */}
      <section className="py-12 bg-gradient-to-b from-background via-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Enterprise Platform</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Comprehensive Sports Technology Suite
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            >
              Our integrated platform delivers everything sports organizations need — from real-time analytics to fan engagement, all built on enterprise-grade infrastructure.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/10 transition-all">
                      <f.icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-xs font-semibold text-accent/70 bg-accent/5 px-3 py-1.5 rounded-full">
                      0{i + 1}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {f.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                    {f.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-accent/5 group-hover:border-accent/20 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent/70 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent"></div>
                      <span>Learn More</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent/50 group-hover:text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Testimonials - Professional Section */}
      <section className="py-12 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 mb-6">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Client Testimonials</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient">Sports Leaders</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Hear from sports organizations that have transformed their operations with our enterprise platform.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Sportiq's platform has revolutionized how we analyze player performance. The real-time analytics have given us a competitive edge we never thought possible.",
                author: "Alex Chen",
                role: "Head of Analytics, Premier League Club",
                organization: "Premier League",
                color: "bg-purple-500/10",
                borderColor: "border-purple-500/20"
              },
              {
                quote: "The enterprise security and scalability of Sportiq's platform allowed us to implement across our entire league with confidence. The ROI has been exceptional.",
                author: "Maria Rodriguez",
                role: "CTO, NBA Franchise",
                organization: "NBA",
                color: "bg-orange-500/10",
                borderColor: "border-orange-500/20"
              },
              {
                quote: "As our official data partner, Sportiq has transformed how we manage tournaments and engage with fans globally. The platform's reliability is unmatched.",
                author: "James Wilson",
                role: "Tournament Director, UEFA",
                organization: "UEFA",
                color: "bg-blue-500/10",
                borderColor: "border-blue-500/20"
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative p-8 rounded-2xl ${testimonial.color} backdrop-blur-sm border ${testimonial.borderColor} hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-2xl h-full`}>
                  {/* Quote marks */}
                  <div className="mb-6">
                    <div className="text-4xl text-accent/30 font-serif">"</div>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-8 italic">
                    {testimonial.quote}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-accent/10 group-hover:border-accent/25 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center">
                        <div className="text-lg font-bold text-accent">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-accent font-medium mt-1">{testimonial.organization}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Official partner badge */}
                  <div className="absolute -top-3 right-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-accent/15 shadow-md">
                      <CheckCircle className="h-3 w-3 text-accent" />
                      <span className="text-xs font-semibold text-accent">Official Partner</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 pt-12 border-t border-accent/10"
          >
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Client Satisfaction", desc: "Based on annual surveys" },
                { value: "4.9/5", label: "Platform Rating", desc: "Enterprise customer reviews" },
                { value: "24/7", label: "Support Coverage", desc: "Global support team" },
                { value: "99.9%", label: "Uptime SLA", desc: "Enterprise reliability" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{metric.value}</div>
                  <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Enterprise CTA */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background/50 to-accent/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/30 backdrop-blur-sm border border-accent/20 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">Enterprise Ready</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                Transform Your Sports Organization with <span className="text-gradient">Intelligent Technology</span>
              </h2>
              
              <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Join 200+ global sports organizations already leveraging our platform to gain competitive advantages, optimize operations, and enhance fan experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Enterprise Security", desc: "SOC 2 Type II compliant infrastructure" },
                { title: "Global Scale", desc: "Multi-region deployment across 35+ countries" },
                { title: "24/7 Support", desc: "Dedicated enterprise support team" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:from-accent/15 group-hover:to-accent/10 transition-all">
                    <div className="w-3 h-3 rounded-full bg-accent group-hover:scale-125 transition-transform"></div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 max-w-md"
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground from-accent to-accent/90  hover:from-accent/90 hover:to-accent/80 font-semibold px-10 py-7 text-base shadow-2xl hover:shadow-3xl transition-all duration-300">
                      <span className="flex items-center justify-center gap-3">
                      Schedule Enterprise Demo
                      <ArrowRight className="h-6 w-6" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 max-w-md"
              >
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full border-accent/30 text-foreground hover:border-accent/50 hover:bg-accent/5 px-10 py-7 text-lg shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center gap-3">
                      Explore Company
                      <ArrowRight className="h-6 w-6" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-accent/10"
            >
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>30-day pilot program available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Custom implementation support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
