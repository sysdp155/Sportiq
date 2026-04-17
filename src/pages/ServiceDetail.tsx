import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { services } from "./Services";



export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the service by title slug
  const service = services.find(s => 
    s.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!service) {
    return (
      <Layout>
        <section className="py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl font-bold text-primary mb-6">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const IconComponent = service.icon;

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/services">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <IconComponent className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mb-10">
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-xl overflow-hidden shadow-elevated mb-8">
                <img 
                  src={service.image || `/src/assets/Product/product (${services.indexOf(service) % 15 + 1}).jpg`}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">What to Expect</h3>
                <p className="text-muted-foreground mb-4">
                  Our {service.title.toLowerCase()} service is designed to deliver measurable results through a combination of cutting-edge technology and deep sports industry expertise.
                </p>
                <p className="text-muted-foreground">
                  We work closely with your team to ensure seamless integration and maximum impact on your operations, performance, or fan engagement goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}