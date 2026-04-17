import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Upload, FileText, Users, CheckCircle, ClipboardList, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CareerApplication() {
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get("role") || "Open Position";
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "Thank you for applying. We'll be in touch soon.",
    });
    navigate("/careers");
  };

  return (
    <Layout>
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/Images/Career.jpg" 
            alt="Career Application" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Apply Now
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {jobTitle}
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Complete the form below to submit your application.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8"
            onClick={() => navigate("/careers")}
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Careers
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-40">
            {/* Steps sidebar */}
            <aside className="space-y-6">
              <h2 className="font-heading font-semibold text-foreground text-lg">How It Works</h2>
              <ol className="space-y-8">
                {[
                  { icon: ClipboardList, title: "Submit Application", desc: "Fill out the form with your details and upload your resume." },
                  { icon: Users, title: "Team Review", desc: "Our hiring team reviews every application within 5 business days." },
                  { icon: Code, title: "Technical Test", desc: "Complete a technical assessment tailored to the role you applied for." },
                  { icon: FileText, title: "Interview Process", desc: "Selected candidates go through 2–3 rounds of interviews." },
                  { icon: CheckCircle, title: "Offer & Onboarding", desc: "Receive your offer and begin a smooth onboarding experience." },
                ].map((step, i, arr) => (
                  <li key={step.title} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center h-9 w-9 rounded-full shrink-0 ${i === 0 ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`}>
                        <step.icon className="h-4 w-4" />
                      </div>
                      {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-2">
                      <p className="font-medium text-sm text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Doe" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input id="linkedIn" name="linkedIn" value={form.linkedIn} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio / Website</Label>
                    <Input id="portfolio" name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://..." />
                  </div>
                </div>

                {/* Resume */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / CV *</Label>
                  <div className="border border-input rounded-md p-4 bg-card flex items-center gap-3">
                    <Upload className="h-5 w-5 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      {resume ? (
                        <span className="text-sm text-foreground truncate block">{resume.name}</span>
                      ) : (
                        <span className="text-sm text-muted-foreground">PDF, DOC, or DOCX (max 5MB)</span>
                      )}
                    </div>
                    <label htmlFor="resume" className="cursor-pointer text-sm font-medium text-accent hover:underline shrink-0">Browse</label>
                    <input id="resume" type="file" accept=".pdf,.doc,.docx" required className="hidden" onChange={(e) => setResume(e.target.files?.[0] || null)} />
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea id="coverLetter" name="coverLetter" rows={6} value={form.coverLetter} onChange={handleChange} placeholder="Tell us why you're a great fit for this role..." />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
