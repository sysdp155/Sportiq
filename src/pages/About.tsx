import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, ArrowRight, BarChart3 } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Target, title: "Innovation First", desc: "We push boundaries with cutting-edge technology to solve real problems in sports." },
  { icon: Eye, title: "Data-Driven", desc: "Every product decision is backed by data, every feature measured by impact." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of quality and reliability." },
  { icon: Users, title: "Partnership", desc: "We work alongside our clients as true partners in their digital transformation." },
];

const timeline = [
  { year: "2019", event: "Founded in Stockholm with a mission to digitize sports operations." },
  { year: "2020", event: "Launched first analytics platform for European football leagues." },
  { year: "2021", event: "Expanded to 15 countries. Raised Series A funding." },
  { year: "2023", event: "Hit 100+ team customers. Launched fan engagement suite." },
  { year: "2025", event: "200+ teams globally. AI-powered predictive analytics released." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/about.jpg" 
            alt="About us background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wider uppercase mb-4 border border-accent/20">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Where Sports Meets <span className="text-gradient">Technology</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Sportiq was founded by engineers and sports enthusiasts who saw a gap between the data available in sports and the tools to use it. We bridge that gap with world-class software.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-sm">Founded 2019</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-sm">200+ Teams Worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-sm">35+ Countries</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <img src={aboutTeam} alt="Sportiq team" width={1200} height={800} className="rounded-lg shadow-2xl border-2 border-primary-foreground/10" />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">Our Team</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Story" title="How Sportiq Began" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sportiq began with a frustration that many athletes, coaches, and sports enthusiasts quietly share.
              </p>
              <p>
                Despite the global growth of sports and fitness, the tools supporting everyday players remained outdated, fragmented, and inefficient. Booking a field often meant phone calls or messaging apps. Finding teammates at the right level was inconsistent. Performance tracking was either too basic or only available to professionals. Meanwhile, valuable data existed — but it wasn't accessible or actionable.
              </p>
              <p>
                In early 2024, a small team of engineers and sports enthusiasts came together with a clear idea: what if sports could be managed and experienced as seamlessly as modern digital products?
              </p>
              <p>
                That question became the foundation of Sportiq.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">The Early Days</h3>
              <p>
                We started by focusing on one core problem: time-sensitive access to sports opportunities.
              </p>
              <p>
                Our first prototypes were built around real-time monitoring and automation — helping users discover and secure available slots, sessions, and opportunities without constant manual effort. This phase allowed us to deeply understand how users interact with sports platforms, where friction exists, and how systems behave under real-world conditions.
              </p>
              <p>
                Very quickly, we realized that the problem was bigger than booking.
              </p>
              <p>
                Sports ecosystems lacked:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time coordination</li>
                <li>Intelligent matching between players</li>
                <li>Reliable automation for repetitive actions</li>
                <li>Centralized, user-friendly tools</li>
              </ul>
              <p>
                This insight pushed us beyond a single feature into building a broader platform.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">Building the Platform</h3>
              <p>
                Sportiq evolved into a sports-technology infrastructure layer designed to simplify and enhance the entire experience around playing and managing sports.
              </p>
              <p>
                We began developing systems that combine:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smart automation to reduce manual effort</li>
                <li>Data-driven insights to improve performance and decision-making</li>
                <li>Seamless integrations with existing platforms and workflows</li>
                <li>Scalable architecture to support multiple users, profiles, and environments</li>
              </ul>
              <p>
                Our focus has always been on creating tools that feel effortless to the user while handling complex processes behind the scenes.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">Our Approach</h3>
              <p>
                At Sportiq, we don't just build features — we solve real-world friction.
              </p>
              <p>
                We design with three principles in mind:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">Simplicity:</span> Complex processes should feel intuitive</li>
                <li><span className="font-semibold">Reliability:</span> Systems must work consistently in dynamic environments</li>
                <li><span className="font-semibold">Intelligence:</span> Data should actively improve the user experience</li>
              </ul>
              <p>
                This approach allows us to create solutions that are both powerful and practical.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">Where We Are Today</h3>
              <p>
                Today, Sportiq is growing into a comprehensive sports-tech platform that serves athletes, teams, and organizations.
              </p>
              <p>
                We are continuously expanding our capabilities in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automation and real-time systems</li>
                <li>Performance analytics and AI-driven insights</li>
                <li>User matching and community building</li>
                <li>Scalable tools for multi-user environments</li>
              </ul>
              <p>
                Our technology is designed not just for today's needs, but for the future of sports — where digital experiences are as important as physical performance.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">Looking Ahead</h3>
              <p>
                Our vision is to become a core layer of digital infrastructure in the sports industry.
              </p>
              <p>
                We believe the future of sports will be:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>More connected</li>
                <li>More data-driven</li>
                <li>More personalized</li>
              </ul>
              <p>
                Sportiq aims to be at the center of that transformation.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">Why We Exist</h3>
              <p>
                At our core, Sportiq exists to remove friction from sports.
              </p>
              <p>
                So players can focus on playing. Teams can focus on performing. And organizations can focus on growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-lg border bg-background"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize the sports industry by making advanced analytics and intelligence tools accessible to every team, league, and organization worldwide. We envision a future where data-driven decisions are the standard, not the exception, in sports.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-lg border bg-background"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower sports organizations with intuitive, powerful software that transforms raw data into actionable insights. We're committed to building tools that enhance performance, optimize operations, and create meaningful connections between teams and their fans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Leadership" title="Meet the Team" description="The passionate leaders driving Sportiq forward." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/CEO.jpg" 
                  alt="Michael Anderson - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">Michael Anderson</h3>
              <p className="text-accent font-medium text-sm mb-2">Chief Executive Officer</p>
              <p className="text-muted-foreground text-sm">
                Former professional athlete turned tech entrepreneur. Leads company vision and strategy.
              </p>
            </motion.div>

            {/* CTO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/CTO.jpg" 
                  alt="James Wilson - CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">James Wilson</h3>
              <p className="text-accent font-medium text-sm mb-2">Chief Technology Officer</p>
              <p className="text-muted-foreground text-sm">
                Ex-Google engineer with 10+ years in scalable systems and AI infrastructure.
              </p>
            </motion.div>

      

            {/* Product Manager */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/Project Manager.jpg" 
                  alt="Robert Thompson - Product Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">Annie Shahnawaz</h3>
              <p className="text-accent font-medium text-sm mb-2">Product Manager</p>
              <p className="text-muted-foreground text-sm">
                Agile expert with background in sports management. Ensures timely delivery of features.
              </p>
            </motion.div>

            {/* Engineering Manager */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/1776318657353_1776318657352-blob.jpg" 
                  alt="Daniel Garcia - Engineering Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">Daniel Garcia</h3>
              <p className="text-accent font-medium text-sm mb-2">Engineering Manager</p>
              <p className="text-muted-foreground text-sm">
                Leads engineering teams building scalable sports technology platforms.
              </p>
            </motion.div>


            {/* Sports Head of / Sports Director */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/Marketing.jpg" 
                  alt="Maria Manjavidze - Marketing Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">Maria Manjavidze</h3>
              <p className="text-accent font-medium text-sm mb-2">Marketing Manager</p>
              <p className="text-muted-foreground text-sm">
                Former professional coach with deep industry connections and sports expertise.
              </p>
            </motion.div>


            {/* Head of Sports */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/Sports.jpg" 
                  alt="Maria Manjavidze - Marketing Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">Kevin Scott</h3>
              <p className="text-accent font-medium text-sm mb-2">Head of Sports</p>
              <p className="text-muted-foreground text-sm">
                Drives brand awareness and customer acquisition in the sports technology market.
              </p>
            </motion.div>




            {/* HR / Talent Manager */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img 
                  src="/src/assets/Members/HR Manager.jpg" 
                  alt="William Davis - HR Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">William Davis</h3>
              <p className="text-accent font-medium text-sm mb-2">HR & Talent Manager</p>
              <p className="text-muted-foreground text-sm">
                Builds and nurtures our talented team culture. Focuses on employee growth and wellbeing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Journey" title="From Startup to Industry Leader" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-accent/30 via-accent/20 to-accent/10 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`flex flex-col md:flex-row items-center md:items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Year marker */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center shadow-lg group hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-accent font-bold text-lg">{t.year}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-accent/20 to-transparent"></div>
                      )}
                    </div>
                  </div>

                  {/* Timeline connector for mobile */}
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-accent/20 to-transparent mx-auto my-2"></div>

                  {/* Content card */}
                  <div className="w-full md:w-1/2 pl-0 md:pl-8">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-accent/10 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:border-accent/30 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
                          <span className="text-accent font-bold text-lg">{t.year.slice(2)}</span>
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-accent transition-colors">{t.year}</h3>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                            <span className="text-accent text-sm font-medium">Milestone {i + 1}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{t.event}</p>
                      <div className="mt-4 pt-4 border-t border-accent/5 group-hover:border-accent/20 transition-colors">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent/80 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span>Key Achievement</span>
                          <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final milestone */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                <span className="text-accent font-medium">Continuing our journey of innovation</span>
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <SectionHeading 
            label="Our Impact" 
            title="Making a Difference in Sports" 
            description="The numbers that tell our story of growth and impact across the sports industry."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Sports Teams", desc: "Trust our platform" },
              { value: "35+", label: "Countries", desc: "Global reach" },
              { value: "50M+", label: "Data Points", desc: "Processed daily" },
              { value: "99.9%", label: "Uptime", desc: "Platform reliability" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors group"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-accent/70 transition-colors">{stat.desc}</div>
                <div className="mt-4 pt-3 border-t border-accent/5 group-hover:border-accent/20 transition-colors">
                  <div className="w-6 h-1 rounded-full bg-accent/30 mx-auto group-hover:bg-accent/50 transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Values" title="What Drives Us" description="Core principles that guide every line of code we write." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-lg border bg-card text-center group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:border-accent/30"
              >
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:from-accent/20 group-hover:to-accent/10 transition-all">
                  <v.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full border border-accent/10 group-hover:border-accent/30 transition-colors"></div>
                </div>
                <h3 className="font-heading font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">{v.desc}</p>
                <div className="mt-4 pt-4 border-t border-accent/5 group-hover:border-accent/20 transition-colors">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent"></div>
                    <span>Core Value {i + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background/50 to-accent/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wider uppercase mb-6 border border-accent/20">
              Join Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Be Part of the Sports Technology Revolution
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you're a sports organization looking to leverage data or a talented individual passionate about sports tech, we'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </motion.button>
              </a>
              <a href="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-background/80 backdrop-blur-sm text-foreground font-semibold border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  View Careers
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
