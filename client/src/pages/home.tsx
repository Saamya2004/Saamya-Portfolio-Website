import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Mail, 
  Linkedin, 
  Phone, 
  ArrowRight, 
  Download,
  Code2,
  Database,
  Brain,
  BarChart3,
  GitBranch,
  Users,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Palette,
  Gamepad2,
  Video,
  Trophy,
  Menu,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl tracking-tight">SG</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("education")} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-education"
              >
                Education
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={() => scrollToSection("contact")} 
                size="sm"
                className="hidden md:flex"
                data-testid="button-contact-nav"
              >
                Contact
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col gap-6 pt-8">
                    <button 
                      onClick={() => scrollToSection("about")} 
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                      data-testid="link-about-mobile"
                    >
                      About
                    </button>
                    <button 
                      onClick={() => scrollToSection("experience")} 
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                      data-testid="link-experience-mobile"
                    >
                      Experience
                    </button>
                    <button 
                      onClick={() => scrollToSection("projects")} 
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                      data-testid="link-projects-mobile"
                    >
                      Projects
                    </button>
                    <button 
                      onClick={() => scrollToSection("skills")} 
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                      data-testid="link-skills-mobile"
                    >
                      Skills
                    </button>
                    <button 
                      onClick={() => scrollToSection("education")} 
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                      data-testid="link-education-mobile"
                    >
                      Education
                    </button>
                    <Button 
                      onClick={() => scrollToSection("contact")} 
                      className="w-full"
                      data-testid="button-contact-mobile"
                    >
                      Contact
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24 z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight" data-testid="text-name">
                Saamya Gupta
              </h1>
              <p className="text-xl md:text-2xl font-medium text-primary" data-testid="text-title">
                AI and Data Science Engineer
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-summary">
              Specializing in LLM-integrated automation, multi-agent systems using LANGGRAPH and OPENAI AGENTIC SDK, 
              and data-driven analytics. Proficient in anomaly detection and end-to-end AI workflows using Python and LangChains.
            </p>

            {/* Contact CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button 
                variant="default" 
                size="lg" 
                className="gap-2"
                asChild
                data-testid="button-email"
              >
                <a href="mailto:guptasaamya6@gmail.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                asChild
                data-testid="button-linkedin"
              >
                <a href="https://linkedin.com/in/SaamyaGupta" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                asChild
                data-testid="button-phone"
              >
                <a href="tel:+919373982862">
                  <Phone className="w-4 h-4" />
                  +91 9373982862
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            {/* Professional Summary */}
            <Card className="p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" data-testid="heading-summary">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AI and Data Science Engineer with expertise in building sophisticated multi-agent systems 
                  and implementing LLM-integrated automation solutions. Currently serving as Assistant Manager 
                  at Airtel Digital, specializing in DDoS analysis and threat detection.
                </p>
                <p>
                  Proficient in leveraging cutting-edge technologies including LangGraph, OpenAI Agentic SDK, 
                  and advanced machine learning frameworks to deliver end-to-end AI workflows. Skilled in 
                  SQL-based data extraction, model development, and creating impactful dashboards with Power BI.
                </p>
                <p>
                  Passionate about pushing the boundaries of what's possible with AI, from building autonomous 
                  research systems to developing RAG-based assistants and vulnerability scanners.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline Design */}
      <section id="experience" className="py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="heading-experience">Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My professional journey in AI and data science
              </p>
            </div>

            <div className="relative">
              {/* Timeline Connector Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/30 hidden md:block" />

              <div className="space-y-12">
                {/* Current Position */}
                <div className="relative">
                  <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-20 p-6 md:p-8" data-testid="card-experience-airtel">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          Assistant Manager, DDoS Analyst
                        </h3>
                        <p className="text-lg font-medium text-primary">Airtel Digital</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <Badge variant="secondary" className="gap-1.5">
                          <Calendar className="w-3 h-3" />
                          July 2025 - Present
                        </Badge>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          Pune, India
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExperience("airtel-current")}
                      className="flex items-center gap-2 text-sm text-primary font-medium mb-4 hover:underline"
                      data-testid="button-toggle-airtel"
                    >
                      {expandedExperience === "airtel-current" ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          View Details
                        </>
                      )}
                    </button>

                    {expandedExperience === "airtel-current" && (
                      <div className="space-y-4 text-muted-foreground animate-in slide-in-from-top-2">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">SQL Data Extraction And Manipulation</h4>
                          <p className="leading-relaxed">
                            Executed complex SQL queries to extract, aggregate, and process large-scale traffic datasets and alert logs.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Data Validation and Preparation</h4>
                          <ul className="list-disc list-inside space-y-1 leading-relaxed">
                            <li>Cleaned and transformed datasets using Python (Pandas)</li>
                            <li>Used Power BI for dashboard creation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Automation and Efficiency Improvement</h4>
                          <p className="leading-relaxed">
                            Built Python scripts to automate data workflows, boosting efficiency and accuracy.
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>

                {/* Internship 1 */}
                <div className="relative">
                  <div className="absolute left-8 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-20 p-6 hover-elevate" data-testid="card-internship-airtel">
                    <Badge variant="outline" className="mb-4">Internship</Badge>
                    <h3 className="text-lg font-semibold mb-2">Analyst Industry Internship</h3>
                    <p className="text-primary font-medium mb-3">Airtel Digital</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        Jan 2025 - Jun 2025
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Pune
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Internship 2 */}
                <div className="relative">
                  <div className="absolute left-8 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-20 p-6 hover-elevate" data-testid="card-internship-coincent">
                    <Badge variant="outline" className="mb-4">Internship</Badge>
                    <h3 className="text-lg font-semibold mb-2">AI and Data Science Internship</h3>
                    <p className="text-primary font-medium mb-3">Coincent with Microsoft Association</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        Nov 2022 - Jan 2023
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Remote
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Built a Fashion MNIST neural network achieving 90% accuracy, reducing misclassification by 18%.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="heading-projects">Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Innovative AI solutions and intelligent systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Agentic AI Project 1 */}
              <Card className="p-8 hover-elevate transition-all group" data-testid="card-project-langgraph">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive AI Personal Co-Worker</h3>
                    <p className="text-sm text-muted-foreground mb-4">Multi-Agent System with LangGraph</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Created a smart assistant using LangChain and ChatOpenAI with tool-integrated capabilities including 
                    Playwright browser automation, file management, Pushover notifications, GoogleSerper API search, 
                    Wikipedia queries, and Python REPL. Built an evaluator agent that checks task completion and requests assistance when needed.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">LangGraph</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">LangChain</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">ChatOpenAI</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Playwright</Badge>
                  </div>
                </div>
              </Card>

              {/* Agentic AI Project 2 */}
              <Card className="p-8 hover-elevate transition-all group" data-testid="card-project-openai">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <GitBranch className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Autonomous Multi-Agent Research System</h3>
                    <p className="text-sm text-muted-foreground mb-4">Report Generation with OpenAI Agentic SDK</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Built an AI-powered multi-agent research system integrating planner, web search, writer, and email agents 
                    for automated research and report generation. Utilized WebSearchTool for dynamic information retrieval 
                    and custom email sender for automated delivery of HTML-formatted reports.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">OpenAI SDK</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Multi-Agent</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">WebSearch</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Automation</Badge>
                  </div>
                </div>
              </Card>

              {/* RAG Research Assistant */}
              <Card className="p-8 hover-elevate transition-all group" data-testid="card-project-rag">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">RAG-based Research Assistant</h3>
                    <p className="text-sm text-muted-foreground mb-4">Document and URL QA System</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed a comprehensive document and URL QA system using Langchain, FAISS, and custom LLMs. 
                    Enabled real-time question answering from PDFs, DOCX, and web pages with efficient chunking, 
                    embedding (sentence-transformers), and multi-format loaders.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">LangChain</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">FAISS</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">RAG</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Embeddings</Badge>
                  </div>
                </div>
              </Card>

              {/* Vulnerability Scanner */}
              <Card className="p-8 hover-elevate transition-all group" data-testid="card-project-scanner">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Code2 className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Vulnerability Scanner</h3>
                    <p className="text-sm text-muted-foreground mb-4">Auto-Fix Tool with LangChain</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A system to detect and automatically fix code vulnerabilities using LangChain. 
                    Analyzes code patterns, identifies security issues, and suggests or applies automated fixes 
                    to improve code security and quality.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">LangChain</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Security</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Automation</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Code Analysis</Badge>
                  </div>
                </div>
              </Card>

              {/* ML Models */}
              <Card className="p-8 hover-elevate transition-all group col-span-full md:col-span-1" data-testid="card-project-ml">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Machine Learning Prediction Models</h3>
                    <p className="text-sm text-muted-foreground mb-4">Classification and Prediction</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Built robust prediction models using various machine learning algorithms including Decision Tree, 
                    Naive Bayes, SVM, and Random Forest for diverse classification and prediction tasks.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">Decision Tree</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">SVM</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Random Forest</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">Naive Bayes</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="heading-skills">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming & Tools */}
              <Card className="p-6 hover-elevate" data-testid="card-skill-programming">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Programming & Tools</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Python
                  </li>
                </ul>
              </Card>

              {/* Data Analytics */}
              <Card className="p-6 hover-elevate" data-testid="card-skill-analytics">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">Data Analytics</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Power BI, Tableau
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Pandas, NumPy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Data Cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Trend Analysis
                  </li>
                </ul>
              </Card>

              {/* Machine Learning */}
              <Card className="p-6 hover-elevate" data-testid="card-skill-ml">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Machine Learning</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Scikit-Learn
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Decision Tree, SVM
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Random Forest
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Logistic Regression
                  </li>
                </ul>
              </Card>

              {/* Generative AI */}
              <Card className="p-6 hover-elevate" data-testid="card-skill-genai">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <GitBranch className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">Generative AI</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    LangGraph
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    OpenAI Agentic SDK
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    LangChain (RAGs)
                  </li>
                </ul>
              </Card>

              {/* Database */}
              <Card className="p-6 hover-elevate" data-testid="card-skill-database">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Database</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    MySQL
                  </li>
                </ul>
              </Card>

              {/* Soft Skills */}
              <Card className="p-6 hover-elevate" data-testid="card-skill-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">Soft Skills</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Analytical Thinking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Problem Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Adaptability
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Communication
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="heading-education">Education</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Academic journey and achievements
              </p>
            </div>

            <div className="space-y-8">
              {/* B.Tech */}
              <Card className="p-6 md:p-8 hover-elevate" data-testid="card-education-btech">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">B.Tech - Artificial Intelligence & Data Science</h3>
                        <p className="text-primary font-medium">Vishwakarma Institute of Technology</p>
                      </div>
                      <Badge variant="secondary">June 2025</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Pune, India
                      </div>
                      <div className="font-semibold text-foreground">
                        CGPA: 8.52
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Class XII */}
              <Card className="p-6 md:p-8 hover-elevate" data-testid="card-education-12th">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">Class XII (CBSE)</h3>
                        <p className="text-accent font-medium">The Orbis School</p>
                      </div>
                      <Badge variant="secondary">March 2021</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Pune, India
                      </div>
                      <div className="font-semibold text-foreground">
                        Percentage: 90.2%
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Class X */}
              <Card className="p-6 md:p-8 hover-elevate" data-testid="card-education-10th">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">Class X (CBSE)</h3>
                        <p className="text-primary font-medium">Mother Marys School</p>
                      </div>
                      <Badge variant="secondary">March 2019</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Delhi, India
                      </div>
                      <div className="font-semibold text-foreground">
                        Percentage: 96%
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="heading-interests">Beyond Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interests and extracurricular activities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-6 text-center hover-elevate" data-testid="card-interest-video">
                <Video className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium">Video Editing</p>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-interest-arts">
                <Palette className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-medium">Arts</p>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-interest-sports">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium">Sports</p>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-interest-gaming">
                <Gamepad2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-medium">Gaming</p>
              </Card>
            </div>

            <Card className="p-6 md:p-8 text-center">
              <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="text-leadership">Aesthetic Co-ordinator</h3>
              <p className="text-muted-foreground">EPEC, Vishwakarma Institute of Technology</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <section id="contact" className="py-16 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* CTA */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-contact">Let's Build Together</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
              </div>
              <Button 
                size="lg" 
                className="gap-2" 
                onClick={() => window.open('/api/resume/download', '_blank')}
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4" />
                Download Resume
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <a 
                  href="mailto:guptasaamya6@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  data-testid="link-email"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>guptasaamya6@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/SaamyaGupta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  data-testid="link-linkedin-footer"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <span>linkedin.com/in/SaamyaGupta</span>
                </a>
                <a 
                  href="tel:+919373982862"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  data-testid="link-phone-footer"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>+91 9373982862</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Saamya Gupta. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
