import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ArrowRight, ChevronDown, DollarSign, Globe, Calendar, GraduationCap, Laptop, Heart, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const perks = [
  { text: "Competitive salary & equity", icon: DollarSign },
  { text: "Remote-first culture", icon: Globe },
  { text: "Unlimited PTO", icon: Calendar },
  { text: "Learning & conference budget", icon: GraduationCap },
  { text: "Latest hardware", icon: Laptop },
  { text: "Health & wellness benefits", icon: Heart },
];

const jobs = [
  { 
    title: "Senior Backend Engineer", 
    team: "Platform", 
    location: "Remote / Stockholm", 
    type: "Full-time",
    description: "As a Senior Backend Engineer at Sportiq, you'll design and build scalable microservices that power our sports analytics platform. You'll work with technologies like Node.js, TypeScript, PostgreSQL, Redis, and Kafka to process millions of data points daily.",
    responsibilities: [
      "Design and implement high-performance backend services",
      "Build real-time data processing pipelines",
      "Optimize database queries and caching strategies",
      "Implement security best practices and data protection",
      "Collaborate with frontend and data engineering teams"
    ],
    requirements: [
      "5+ years of backend development experience",
      "Expertise in Node.js/TypeScript or similar",
      "Experience with PostgreSQL, Redis, and message queues",
      "Strong understanding of microservices architecture",
      "Experience with AWS or similar cloud platforms"
    ]
  },
  { 
    title: "ML Engineer — Sports Analytics", 
    team: "AI", 
    location: "Remote / London", 
    type: "Full-time",
    description: "Develop machine learning models for sports performance prediction, injury prevention, and game strategy optimization. Work with large datasets from wearables, video feeds, and historical performance data.",
    responsibilities: [
      "Develop and train ML models for sports analytics",
      "Process and analyze large-scale sports data",
      "Implement computer vision algorithms for movement analysis",
      "Collaborate with sports scientists and coaches",
      "Deploy models to production with monitoring"
    ],
    requirements: [
      "3+ years of ML engineering experience",
      "Strong Python skills with PyTorch/TensorFlow",
      "Experience with computer vision or time-series analysis",
      "Knowledge of MLOps and model deployment",
      "Sports analytics background is a plus"
    ]
  },
  { 
    title: "Product Designer", 
    team: "Design", 
    location: "Remote", 
    type: "Full-time",
    description: "Create intuitive and beautiful user experiences for coaches, athletes, and sports analysts. Design dashboards, data visualizations, and mobile interfaces that make complex sports data accessible.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Create data visualization components",
      "Conduct user research with sports professionals",
      "Develop design systems and component libraries",
      "Collaborate with engineering teams on implementation"
    ],
    requirements: [
      "4+ years of product design experience",
      "Portfolio showcasing complex data interfaces",
      "Proficiency in Figma and design tools",
      "Understanding of sports analytics workflows",
      "Experience with design systems"
    ]
  },
  { 
    title: "DevOps / SRE Engineer", 
    team: "Infrastructure", 
    location: "Remote / Stockholm", 
    type: "Full-time",
    description: "Build and maintain our cloud infrastructure ensuring 99.9% uptime for global sports organizations. Implement CI/CD pipelines, monitoring, and disaster recovery solutions.",
    responsibilities: [
      "Manage Kubernetes clusters and cloud infrastructure",
      "Implement monitoring and alerting systems",
      "Build CI/CD pipelines for multiple services",
      "Ensure security compliance and data protection",
      "Optimize infrastructure costs and performance"
    ],
    requirements: [
      "4+ years of DevOps/SRE experience",
      "Expertise in Kubernetes and Docker",
      "Experience with AWS services",
      "Knowledge of infrastructure as code (Terraform)",
      "Strong scripting skills (Bash, Python)"
    ]
  },
  { 
    title: "Frontend Engineer (React)", 
    team: "Platform", 
    location: "Remote", 
    type: "Full-time",
    description: "Build responsive and performant user interfaces using React, TypeScript, and modern frontend technologies. Create data visualization components and real-time dashboards for sports analytics.",
    responsibilities: [
      "Develop React components with TypeScript",
      "Build real-time data visualization dashboards",
      "Optimize frontend performance and bundle size",
      "Implement responsive designs for multiple devices",
      "Collaborate with backend and design teams"
    ],
    requirements: [
      "3+ years of React development experience",
      "Strong TypeScript skills",
      "Experience with data visualization libraries",
      "Knowledge of state management (React Query, Zustand)",
      "Understanding of performance optimization"
    ]
  },
  { 
    title: "Technical Account Manager", 
    team: "Customer Success", 
    location: "London", 
    type: "Full-time",
    description: "Bridge the gap between our technical platform and enterprise clients. Help sports organizations implement and optimize their use of Sportiq's platform.",
    responsibilities: [
      "Onboard enterprise clients to our platform",
      "Provide technical guidance and best practices",
      "Gather client feedback for product improvements",
      "Coordinate with engineering teams on client requests",
      "Ensure client satisfaction and retention"
    ],
    requirements: [
      "3+ years in technical account management",
      "Technical background in software or sports tech",
      "Excellent communication and presentation skills",
      "Experience working with enterprise clients",
      "Sports industry knowledge is a plus"
    ]
  },
  { 
    title: "Data Engineer", 
    team: "Data", 
    location: "Remote / Berlin", 
    type: "Full-time",
    description: "Build and maintain data pipelines that process millions of sports data points daily. Work with streaming data, batch processing, and data warehousing solutions.",
    responsibilities: [
      "Design and implement data pipelines",
      "Process real-time streaming data",
      "Optimize data storage and query performance",
      "Ensure data quality and governance",
      "Collaborate with ML and analytics teams"
    ],
    requirements: [
      "4+ years of data engineering experience",
      "Expertise in SQL and data modeling",
      "Experience with streaming technologies (Kafka, Flink)",
      "Knowledge of data warehousing solutions",
      "Python or Scala programming skills"
    ]
  },
  { 
    title: "Blockchain Developer", 
    team: "Innovation", 
    location: "Remote / Global", 
    type: "Full-time",
    description: "Develop blockchain-based solutions for sports ticketing, fan engagement, and athlete contracts. Build smart contracts, decentralized applications, and tokenization systems for the sports industry.",
    responsibilities: [
      "Design and implement smart contracts for sports applications",
      "Develop decentralized applications (dApps) for fan engagement",
      "Create tokenization systems for sports assets and collectibles",
      "Integrate blockchain solutions with existing sports platforms",
      "Research and implement blockchain scalability solutions"
    ],
    requirements: [
      "3+ years of blockchain development experience",
      "Expertise in Solidity and smart contract development",
      "Experience with Ethereum, Polygon, or other blockchain platforms",
      "Knowledge of web3.js, ethers.js, or similar libraries",
      "Understanding of blockchain security best practices",
      "Sports or gaming industry experience is a plus"
    ]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
};

export default function Careers() {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJobDetails = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <Layout>
      <section className="py-32 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/Career.jpg" 
            alt="Careers background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">Careers</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Build the Future of <span className="text-gradient">Sports Tech</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Join a world-class team of engineers, designers, and sports enthusiasts.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.text}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-4 rounded-lg bg-accent/5 text-center group hover:bg-accent/10 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{p.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Open Positions" title="Find Your Role" description="We're always looking for talented people who are passionate about sports and technology." />
          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((j, i) => (
              <motion.div
                key={j.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-lg border bg-card hover:shadow-elevated transition-shadow overflow-hidden"
              >
                {/* Job Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-card-foreground">{j.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{j.team}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{j.location}</span>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{j.type}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => toggleJobDetails(i)}
                    >
                      {expandedJob === i ? "View Less" : "View More"}
                      <ChevronDown className={`h-3 w-3 transition-transform ${expandedJob === i ? "rotate-180" : ""}`} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => navigate(`/careers/application?role=${encodeURIComponent(j.title)}`)}
                    >
                      Apply <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Job Details Dropdown */}
                <AnimatePresence>
                  {expandedJob === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t pt-5 space-y-6">
                        {/* Description */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Role Description</h4>
                          <p className="text-muted-foreground text-sm">{j.description}</p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Responsibilities</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {j.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 shrink-0"></div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {j.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 shrink-0"></div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-4">
                          <Button
                            onClick={() => navigate(`/careers/application?role=${encodeURIComponent(j.title)}`)}
                            className="w-full sm:w-auto hover:bg-primary/90"
                          >
                            Apply for {j.title} <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
