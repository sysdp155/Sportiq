import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { HelpCircle, Search, CheckCircle, Shield, Zap, Globe, Lock, Users, BarChart, Cpu } from "lucide-react";
import { useState, useMemo } from "react";

const faqCategories = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Sportiq?",
        answer: "Sportiq is a comprehensive enterprise sports technology platform designed to transform how sports organizations operate. We provide AI powered analytics for performance optimization, team management tools for coaching staff, fan engagement solutions for building community, and robust data processing infrastructure for handling massive datasets. Our platform serves organizations worldwide, from local clubs to international federations, helping them make data driven decisions and enhance their competitive edge."
      },
      {
        question: "Who uses Sportiq?",
        answer: "Our platform is utilized by a diverse range of sports organizations across 35+ countries. This includes professional sports teams (football, basketball, baseball, hockey), major leagues and federations, broadcasters for enhanced sports coverage, and sports technology companies. Our client portfolio ranges from Premier League football clubs and NBA teams to Olympic sports federations and collegiate athletic programs. We also serve emerging sports organizations looking to implement modern technology from the ground up."
      },
      {
        question: "How does Sportiq differ from other sports tech solutions?",
        answer: "Sportiq stands out as a fully integrated platform rather than a collection of point solutions. While many providers offer individual tools for analytics or team management, we combine real time analytics, team management, fan engagement, league operations, and business intelligence into a single unified system. This integration eliminates data silos, reduces implementation complexity, and provides enterprise grade security and scalability. Our platform is built on a microservices architecture that allows for modular expansion as your organization grows."
      },
      {
        question: "Is Sportiq suitable for amateur or youth sports organizations?",
        answer: "Absolutely. We offer tiered solutions specifically designed to scale from youth academies and amateur clubs to professional leagues. Our entry level packages provide essential analytics and management tools at accessible price points, while our platform architecture ensures you can seamlessly upgrade as your organization expands. Many youth sports organizations use Sportiq to track player development, manage schedules, and engage parents and fans through our mobile applications."
      },
      {
        question: "What sports does Sportiq support?",
        answer: "Sportiq supports over 50 different sports across team, individual, and combat categories. Our platform includes sport specific analytics modules for football (soccer), basketball, baseball, American football, hockey, tennis, golf, swimming, track and field, martial arts, and many more. We continuously expand our sport library based on client demand and can develop custom modules for niche or emerging sports. Each module includes sport specific metrics, visualization tools, and benchmarking data."
      },
      {
        question: "How long has Sportiq been in business?",
        answer: "Sportiq was founded in 2018 by former professional athletes and sports technology experts. Over the past 7 years, we've grown from a startup serving local clubs to an enterprise platform trusted by international organizations. Our team includes former coaches, data scientists, professional athletes, and software engineers who understand the unique challenges of sports organizations. We've processed over 500 million data points and supported more than 1,000 organizations worldwide."
      }
    ]
  },
  {
    title: "Platform & Technology",
    items: [
      {
        question: "What technology stack does Sportiq use?",
        answer: "Sportiq is built on a modern, scalable technology stack designed for enterprise performance. Our frontend uses React with TypeScript for type safety and maintainability. The backend employs Node.js for API services and Python for data science and machine learning workloads. Our infrastructure runs on AWS with Kubernetes orchestration for container management, ensuring high availability and automatic scaling. We use PostgreSQL for relational data storage with TimescaleDB extension for time series data, Redis for caching and real time operations, and Elasticsearch for advanced search capabilities. All components are monitored through Prometheus and Grafana for observability."
      },
      {
        question: "How does real time data processing work?",
        answer: "Our real time data processing pipeline handles millions of data points per second with sub 100ms latency. We use WebSocket connections for bidirectional communication, server sent events for one way streaming, and Apache Kafka for distributed event processing. Data from wearables, sensors, video feeds, and manual inputs flows through our ingestion layer where it's validated, normalized, and enriched. The processed data is then available through our APIs, dashboards, and mobile applications within milliseconds. Our system maintains data consistency through event sourcing and CQRS patterns, ensuring all stakeholders see synchronized information."
      },
      {
        question: "What AI/ML capabilities does Sportiq offer?",
        answer: "Sportiq's AI/ML capabilities are extensive and continuously evolving. Our platform includes: 1) Predictive analytics for injury prevention using biomechanical data and historical patterns; 2) Performance optimization models that identify optimal training loads and recovery periods; 3) Computer vision for automated movement analysis from video footage; 4) Natural language processing for sentiment analysis of fan engagement across social media and forums; 5) Recommendation engines for personalized training programs; 6) Anomaly detection for identifying unusual performance patterns; 7) Forecasting models for game outcomes and player development trajectories. All models are trained on anonymized data from our global client base and can be fine tuned for specific organizations."
      },
      {
        question: "Can Sportiq integrate with existing systems?",
        answer: "Yes, Sportiq offers comprehensive integration capabilities through RESTful APIs, GraphQL endpoints, and webhook systems. Common integrations include CRM systems (Salesforce, HubSpot), ticketing platforms (Ticketmaster, SeatGeek), broadcast systems (Ross, Vizrt), wearable devices (Catapult, STATSports, WHOOP), video analysis tools (Hudl, Dartfish), and third party analytics platforms. We provide pre built connectors for popular systems and can develop custom integrations for proprietary software. Our integration framework supports OAuth 2.0 authentication, rate limiting, and comprehensive logging for troubleshooting. Most integrations can be configured through our admin portal without requiring code changes."
      },
      {
        question: "What data visualization tools are available?",
        answer: "Sportiq provides a rich suite of data visualization tools including interactive dashboards, customizable reports, heat maps, spider charts, progress timelines, and comparative analytics. Our visualization engine supports real time updates, drill down capabilities, and export options to PDF, Excel, and PowerPoint. Coaches can create custom dashboards with drag and drop widgets, while administrators can schedule automated report generation and distribution. We also offer advanced visualization features like 3D movement reconstruction, video synchronization with data overlays, and predictive trend lines. All visualizations are mobile responsive and accessible through web and mobile applications."
      },
      {
        question: "How scalable is the Sportiq platform?",
        answer: "Sportiq is built for massive scalability using cloud native architecture principles. Our platform can handle from a single youth team to entire leagues with millions of fans. We've stress tested the system to process over 10 million data points per minute while maintaining sub second response times. The microservices architecture allows independent scaling of components based on demand   for example, scaling analytics processing during game days while maintaining normal capacity for administrative functions. We employ auto scaling groups, content delivery networks (CDNs), and database read replicas to ensure performance under peak loads. Our infrastructure is designed to support global expansion with regional deployments to minimize latency."
      }
    ]
  },
  {
    title: "Pricing & Implementation",
    items: [
      {
        question: "What is the pricing model?",
        answer: "Sportiq offers flexible pricing designed to accommodate organizations of all sizes. Our pricing model includes: 1) Annual enterprise licenses with unlimited users and advanced features; 2) Per team subscriptions for smaller organizations or departments; 3) Pay as you go options for event based usage; 4) Custom solutions for large federations with complex requirements. Pricing factors include number of users, data volume, feature modules selected, and support level required. We provide transparent pricing with no hidden fees and offer volume discounts for multi year commitments. All plans include core platform features with the option to add specialized modules like advanced analytics, custom integrations, or dedicated infrastructure."
      },
      {
        question: "How long does implementation take?",
        answer: "Implementation timelines vary based on organization size and complexity: Standard implementations for small to medium organizations typically take 4 8 weeks, including configuration, data migration, user training, and go live support. Enterprise implementations for large organizations with complex requirements may take 12 16 weeks, including custom development, integration with existing systems, and phased rollout. We follow a structured implementation methodology with clear milestones: Week 1 2: Discovery and planning; Week 3 4: Configuration and data setup; Week 5 6: User training and testing; Week 7 8: Go live and optimization. Each implementation includes a dedicated project manager, technical lead, and training specialist to ensure success."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a comprehensive 30 day proof of concept trial for qualified organizations. The trial includes: Full access to core platform features with sample data; Up to 10 user licenses for evaluation; Dedicated technical support via email and chat; Implementation guidance from our solutions team; Access to training materials and documentation. The trial allows organizations to test real world scenarios, import sample data, and evaluate the platform's fit for their needs. There's no obligation to purchase, and we provide a detailed evaluation report at the end of the trial period. Extended 60 day trials are available for enterprise evaluations with custom requirements."
      },
      {
        question: "What support options are available?",
        answer: "Sportiq provides multi tiered support options: Basic support (included with all plans): 24/7 email support, knowledge base access, community forums, and automated ticketing. Premium support (additional fee): Adds live chat support, phone support during business hours, guaranteed 4 hour response time for critical issues, and dedicated support portal. Enterprise support: Includes all premium features plus 24/7 phone support, dedicated account manager, on site support options, SLA guarantees with financial penalties, and quarterly business reviews. All support tiers include regular platform updates, security patches, and feature enhancements. We also offer professional services for custom development, advanced training, and strategic consulting."
      },
      {
        question: "Are there setup or onboarding fees?",
        answer: "Standard implementation includes basic configuration and training at no additional cost. However, certain services may incur fees: Custom data migration from legacy systems; Development of proprietary integrations; Advanced training beyond standard curriculum; On site implementation assistance; Custom report or dashboard development. We provide transparent quotes for all professional services before work begins. Most organizations find that our standard implementation package meets their needs without additional costs. For enterprise clients, we often include these services in the overall contract value rather than charging separately."
      },
      {
        question: "What is the cancellation policy?",
        answer: "Sportiq offers flexible cancellation terms: Monthly plans can be canceled with 30 days notice with no penalty. Annual plans can be canceled with prorated refund for unused months, minus a 10% early termination fee. Enterprise contracts have specific termination clauses outlined in the agreement, typically allowing cancellation for cause with proper documentation. We believe in earning our clients' business every day, so we make it straightforward to discontinue service if we're not meeting expectations. Data export and migration assistance is provided free of charge upon cancellation to ensure smooth transition to alternative solutions."
      }
    ]
  },
  {
    title: "Security & Compliance",
    items: [
      {
        question: "Is Sportiq SOC 2 compliant?",
        answer: "Yes, Sportiq maintains SOC 2 Type II certification with annual third party audits conducted by independent security firms. Our compliance covers all five Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. We undergo rigorous testing of our security controls, including vulnerability assessments, penetration testing, and code reviews. Audit reports are available to enterprise clients under NDA. In addition to SOC 2, we comply with industry standards including ISO 27001 for information security management and adhere to GDPR, CCPA, and other regional data protection regulations. Our security team includes former cybersecurity professionals with experience in financial services and healthcare sectors."
      },
      {
        question: "Where is data stored?",
        answer: "Sportiq data is stored in geographically distributed AWS data centers with multiple availability zones for redundancy. We offer regional hosting options: EU region (Frankfurt, Ireland) for GDPR compliance; US region (Virginia, Oregon) for North American clients; Asia Pacific region (Singapore, Sydney) for Asian and Australian clients. Data residency can be specified during implementation to ensure compliance with local regulations. All data centers are Tier III+ certified with 99.99% uptime SLAs, biometric access controls, 24/7 security monitoring, and environmental controls. Backup data is stored in separate geographical regions for disaster recovery purposes. Clients can request audit reports of our data center security measures."
      },
      {
        question: "How is data encrypted?",
        answer: "Sportiq employs multiple layers of encryption: Data at rest is encrypted using AES 256 with regularly rotated keys managed through AWS Key Management Service (KMS). Data in transit is protected with TLS 1.3 using perfect forward secrecy and strong cipher suites. Database connections use SSL/TLS with certificate pinning. Application level encryption is applied to sensitive fields like personal identification information. We implement zero trust architecture principles where no entity is trusted by default, requiring verification for every access attempt. Encryption keys are stored separately from encrypted data, and we maintain detailed audit logs of all cryptographic operations. Regular cryptographic audits ensure our implementations remain secure against emerging threats."
      },
      {
        question: "What backup and disaster recovery measures are in place?",
        answer: "Our comprehensive backup and disaster recovery strategy includes: Automated daily full backups with 30 day retention; Incremental backups every 4 hours with 7 day retention; Multi region replication for critical data; Point in time recovery capability for databases; Regular disaster recovery drills every quarter. Our Recovery Time Objective (RTO) is 4 hours for full service restoration, and Recovery Point Objective (RPO) is 1 hour for data loss prevention. We maintain a 99.9% uptime SLA with financial penalties for non compliance. Disaster recovery plans are documented and tested annually, with failover procedures that can be activated within minutes. We also offer business continuity consulting to help clients develop their own contingency plans."
      },
      {
        question: "How is access control managed?",
        answer: "Sportiq implements robust access control through: Role based access control (RBAC) with predefined roles (admin, coach, player, fan, etc.) and custom role creation; Multi factor authentication (MFA) for all administrative accounts; Single sign on (SSO) integration with SAML 2.0 and OIDC; Just in time (JIT) provisioning for temporary access needs; Session management with automatic timeout and re authentication requirements. Access logs are maintained for 365 days with real time alerting for suspicious activities. We support granular permissions at the feature, data field, and record levels. Regular access reviews are conducted, and orphaned accounts are automatically disabled after 90 days of inactivity. All access attempts are logged and monitored for anomalous patterns."
      },
      {
        question: "What data privacy regulations does Sportiq comply with?",
        answer: "Sportiq is designed to comply with global data privacy regulations: GDPR (European Union) with data processing agreements, data protection impact assessments, and appointed EU representatives; CCPA/CPRA (California) with consumer rights management and data sale opt out mechanisms; PIPEDA (Canada) for Canadian organizations; LGPD (Brazil) for Brazilian data subjects; And other regional regulations as they emerge. Our platform includes tools for data subject request management, consent recording and withdrawal, data minimization features, and privacy by design principles. We conduct regular privacy impact assessments and maintain records of processing activities. Legal teams can request our Data Protection Addendum which outlines our commitments as a data processor."
      }
    ]
  },
  {
    title: "Training & Support",
    items: [
      {
        question: "What training resources are available?",
        answer: "Sportiq provides comprehensive training through multiple channels: Interactive online academy with video tutorials, quizzes, and certification programs; Live virtual training sessions scheduled weekly; On site training workshops for enterprise clients; Detailed documentation with step by step guides and best practices; Community forums where users can share tips and ask questions; Regular webinars on new features and advanced techniques. Our training curriculum is divided into beginner, intermediate, and advanced levels, with role specific tracks for administrators, coaches, analysts, and support staff. All training materials are available in multiple languages and are regularly updated to reflect platform enhancements. We also offer train the trainer programs for organizations that want to develop internal expertise."
      },
      {
        question: "How quickly are support tickets typically resolved?",
        answer: "Support response times vary by severity and support tier: Critical issues (system down, data loss): 15 minute response target, 2 hour resolution target for premium/enterprise clients; High priority (major feature malfunction): 1 hour response, 8 hour resolution; Medium priority (feature questions, configuration help): 4 hour response, 24 hour resolution; Low priority (enhancement requests, documentation feedback): 24 hour response, 5 day resolution. Our support team operates 24/7/365 with follow the sun coverage across North America, Europe, and Asia Pacific regions. Average resolution times across all tickets is 6.2 hours, with 94% of tickets resolved within SLA targets. We provide regular status updates throughout the resolution process and conduct root cause analysis for recurring issues."
      },
      {
        question: "Is there a user community or knowledge base?",
        answer: "Yes, the Sportiq Community is an active platform with over 10,000 members worldwide. Features include: Discussion forums organized by sport, role, and topic; Knowledge base with 500+ articles and how to guides; Idea exchange where users can suggest and vote on new features; User groups for specific sports or regions; Case study library showcasing successful implementations; Template gallery for reports, dashboards, and workflows. The community is moderated by our support team and experienced users, with new content added daily. Enterprise clients can create private communities for internal collaboration. We also host annual user conferences with hands on workshops, networking opportunities, and product roadmap sessions."
      },
      {
        question: "Can we request custom features or modifications?",
        answer: "Absolutely. Sportiq offers several pathways for feature requests: Standard enhancement requests through our community voting system, where popular ideas are prioritized for development; Sponsored development for organization specific needs, where clients fund development of custom features they can exclusively use for a period before they become generally available; Partner development program for organizations that want to build integrations or extensions using our SDKs and APIs. Our product team reviews all requests quarterly and provides roadmap visibility for planned enhancements. Enterprise clients have direct access to product managers for strategic discussions about platform direction. We believe in co creating value with our clients and have incorporated hundreds of user suggestions into the platform."
      }
    ]
  }
];



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

// Helper function to format FAQ answers with better structure
const formatAnswer = (answer: string, question: string) => {
  // Split answer into sentences for better readability
  const sentences = answer.split(/(?<=[.!?])\s+/);
  
  // Check for different types of structured content
  const hasNumberedList = answer.match(/\d+\)/g);
  const hasColonList = answer.includes(':') && answer.includes(';');
  const hasBulletPoints = answer.includes('•') || answer.includes('-');
  
  // Handle numbered lists (1) item; 2) item; etc.
  if (hasNumberedList) {
    const listItems = answer.match(/\d+\)\s+[^;]+/g) || [];
    const introText = answer.split(/\d+\)/)[0].trim();
    
    return (
      <div className="space-y-4">
        {introText && <p className="mb-3 text-muted-foreground">{introText}</p>}
        <ol className="space-y-3 pl-5 list-decimal">
          {listItems.map((item, index) => (
            <li key={index} className="text-muted-foreground pl-2 leading-relaxed">
              {item.replace(/\d+\)\s*/, '').replace(/;$/, '').trim()}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  
  // Handle colon-separated lists (Item 1; Item 2; Item 3)
  if (hasColonList) {
    const parts = answer.split(':');
    const intro = parts[0] + ':';
    const listText = parts.slice(1).join(':');
    const listItems = listText.split(';').filter(item => item.trim());
    
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">{intro}</p>
        <ul className="space-y-3 pl-5">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-accent mt-1 mr-2 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{item.trim()}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // Handle regular bullet points
  if (hasBulletPoints) {
    const bulletItems = answer.split(/[•\-]/).filter(item => item.trim());
    return (
      <div className="space-y-2 pl-5">
        {bulletItems.map((item, index) => (
          <li key={index} className="flex items-start text-muted-foreground">
            <span className="mr-2">•</span>
            {item.trim()}
          </li>
        ))}
      </div>
    );
  }
  
  // For regular paragraphs, split into multiple paragraphs if long
  if (sentences.length > 2) {
    return (
      <div className="space-y-4">
        {sentences.map((sentence, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {sentence}
          </p>
        ))}
      </div>
    );
  }
  
  // For shorter answers
  return <p className="text-muted-foreground leading-relaxed">{answer}</p>;
};

// Helper to get appropriate icon based on question content
const getQuestionIcon = (question: string) => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('security') || lowerQuestion.includes('compliance') || lowerQuestion.includes('encryption')) {
    return <Shield className="h-5 w-5 text-blue-500" />;
  } else if (lowerQuestion.includes('technology') || lowerQuestion.includes('stack') || lowerQuestion.includes('ai') || lowerQuestion.includes('ml')) {
    return <Cpu className="h-5 w-5 text-purple-500" />;
  } else if (lowerQuestion.includes('pricing') || lowerQuestion.includes('cost') || lowerQuestion.includes('fee')) {
    return <BarChart className="h-5 w-5 text-green-500" />;
  } else if (lowerQuestion.includes('support') || lowerQuestion.includes('training') || lowerQuestion.includes('help')) {
    return <Users className="h-5 w-5 text-orange-500" />;
  } else if (lowerQuestion.includes('data') || lowerQuestion.includes('storage') || lowerQuestion.includes('backup')) {
    return <Globe className="h-5 w-5 text-cyan-500" />;
  } else if (lowerQuestion.includes('integration') || lowerQuestion.includes('api')) {
    return <Zap className="h-5 w-5 text-yellow-500" />;
  } else if (lowerQuestion.includes('access') || lowerQuestion.includes('control') || lowerQuestion.includes('permission')) {
    return <Lock className="h-5 w-5 text-red-500" />;
  }
  
  return <CheckCircle className="h-5 w-5 text-accent" />;
};

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQ items based on search query
  const filteredFAQItems = useMemo(() => {
    if (!searchQuery.trim()) {
      // If no search query, return all items grouped by category
      return faqCategories.map(category => ({
        ...category,
        items: category.items
      }));
    }

    const query = searchQuery.toLowerCase().trim();
    
    // Filter items across all categories
    const filteredCategories = faqCategories.map(category => {
      const filteredItems = category.items.filter(item => 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query)
      );
      
      return {
        ...category,
        items: filteredItems
      };
    }).filter(category => category.items.length > 0);

    return filteredCategories;
  }, [searchQuery]);

  const totalFilteredItems = filteredFAQItems.reduce((total, category) => total + category.items.length, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/blog.jpg" 
            alt="FAQ Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <HelpCircle className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 max-w-3xl mx-auto">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our platform, technology, pricing, and implementation process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="FAQ Categories"
            title="Find Answers by Category"
            description="Browse questions organized by topic to quickly find the information you need."
          />

          {/* Search/Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
                aria-label="Search FAQ questions and answers"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2" aria-hidden="true">
                {searchQuery ? (
                  <Search className="h-5 w-5 text-accent" />
                ) : (
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-3">
              {searchQuery ? (
                <>
                  Found {totalFilteredItems} result{totalFilteredItems !== 1 ? 's' : ''} for "{searchQuery}"
                  {totalFilteredItems === 0 && (
                    <span className="block mt-1">
                      Can't find what you're looking for? <Link to="/contact" className="text-accent hover:underline">Contact our support team</Link>
                    </span>
                  )}
                </>
              ) : (
                <>
                  Can't find what you're looking for? <Link to="/contact" className="text-accent hover:underline">Contact our support team</Link>
                </>
              )}
            </p>
          </motion.div>
          
          {totalFilteredItems > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {filteredFAQItems.map((category, categoryIndex) => (
                  category.items.length > 0 && (
                    <div key={categoryIndex} className="bg-card rounded-xl border p-6 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-semibold text-foreground mb-4 pb-3 border-b">{category.title}</h3>
                      <Accordion type="single" collapsible className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <AccordionItem key={`${categoryIndex}-${itemIndex}`} value={`item-${categoryIndex}-${itemIndex}`} className="border-b-0">
                            <AccordionTrigger className="text-left hover:no-underline hover:bg-muted/30 px-4 py-3 rounded-lg transition-colors group">
                              <div className="flex items-start w-full">
                                <div className="mr-3 mt-1 flex-shrink-0">
                                  {getQuestionIcon(item.question)}
                                </div>
                                <span className="font-medium text-foreground text-left group-hover:text-accent transition-colors">
                                  {item.question}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-3">
                              <div className="pl-8 border-l-2 border-accent/30">
                                {formatAnswer(item.answer, item.question)}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )
                ))}
              </div>
            </motion.div>
          ) : searchQuery ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <HelpCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">No results found</h3>
              <p className="text-muted-foreground">
                No FAQ items match your search for "{searchQuery}". Try different keywords or browse all categories.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}