import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Calculator, FileText, Building2, Scale, Users, FileCheck, Award, Shield, TrendingUp, ChevronLeft, ChevronRight, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import caLogo from "@/assets/ca-logo.png";

const services = [
  { icon: Scale, title: "Statutory Audit & Income Tax Audit", description: "We offer complete Audit & Assurance services covering both Statutory Audit and Tax Audit as per applicable laws. Our services include verification of financial statements, review of internal controls, accuracy of accounting records, compliance with Companies Act/LLP Act/Income Tax Act, and reporting of key observations. We ensure transparent financial reporting, timely compliance, and reliable insights to support better decision-making and strengthen stakeholder confidence." },
  { icon: Calculator, title: "Accounting & Financial Statements", description: "Professional bookkeeping and preparation of accurate financial statements" },
  { icon: FileText, title: "Income Tax Return & Assessment", description: "Expert filing, assessment support, and appeal representation" },
  { icon: FileCheck, title: "Project Reports & CMA", description: "Detailed project reports and Credit Monitoring Arrangement data" },
  { icon: Building2, title: "GST Registration & Compliance", description: "End-to-end GST services from registration to monthly compliance" },
  { icon: Users, title: "ROC / MCA Compliance Services/Company Incorporation", description: "We provide complete ROC (Registrar of Companies) Compliance services to ensure your company/LLP meets all statutory filing requirements under the Companies Act & LLP Act. Our services include preparation and filing of annual returns, financial statements, event-based forms, director compliances, maintenance of statutory registers, and advisory on all ROC-related matters. We ensure timely filings, error-free documentation, and full legal compliance to avoid penalties and maintain corporate governance." },
];

const slides = [
  {
    title: "Indirect",
    highlight: "Tax",
    description: "Indirect Tax is a tax which is not directly levied on the income of an individual but is levied on goods and services."
  },
  {
    title: "Audit",
    highlight: "Services",
    description: "We offer complete Audit & Assurance services covering Statutory Audit and Tax Audit as per applicable laws."
  },
  {
    title: "Direct",
    highlight: "Tax",
    description: "A direct tax is paid directly by an individual or organization to an imposing entity."
  },
  {
    title: "ROC Compliance",
    highlight: "Services",
    description: "Complete ROC compliance services ensuring your company/LLP meets all statutory filing requirements."
  },
];

const stats = [
  { number: "5+", label: "Years Experience", icon: Award },
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "1000+", label: "Projects Delivered", icon: TrendingUp },
  { number: "100%", label: "Compliance Rate", icon: Shield },
];

// Hook for intersection observer animations
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const aboutSection = useInView();
  const statsSection = useInView();
  const servicesSection = useInView();
  const contactSection = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden transition-colors duration-500">
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground py-2.5 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent animate-shimmer" />
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm relative z-10">
          <div className="flex items-center gap-6">
            <a href="tel:+919467263614" className="flex items-center gap-2 hover:text-secondary transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4 animate-pulse-soft" />
              <span>+91 9467263614</span>
            </a>
            <a href="tel:01244073565" className="hidden sm:flex items-center gap-2 hover:text-secondary transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4" />
              <span>0124-4073565</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919467263614" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="mailto:carsnaharwal@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4" />
              <span>carsnaharwal@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-lg border-b border-border sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img src={caLogo} alt="CA India Logo" className="w-14 h-14 object-contain transition-all duration-500 group-hover:rotate-3 group-hover:scale-105" />
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="font-display text-lg font-bold text-navy leading-tight dark:text-primary">Radhey Shyam & Associates</h1>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">Chartered Accountants</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:block">
              <Button className="bg-navy hover:bg-navy/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-navy/25">
                Contact Us
              </Button>
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="container mx-auto px-4 py-4 space-y-2 border-t border-border">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-foreground hover:text-primary py-2 px-4 rounded-lg hover:bg-muted transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-32 right-32 w-24 h-24 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-primary/15 animate-pulse-soft" />
          <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-navy/10 animate-bounce-subtle" />
        </div>

        {/* Slide Content */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <p className="text-navy dark:text-primary font-medium mb-2 opacity-0 animate-slide-down" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Radhey Shyam & Associates
            </p>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute"
                }`}
              >
                {currentSlide === index && (
                  <>
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
                      <span className="text-primary inline-block animate-slide-right" style={{ animationDelay: "0.3s" }}>{slide.title}</span>{" "}
                      <span className="text-secondary italic inline-block animate-slide-left" style={{ animationDelay: "0.5s" }}>{slide.highlight}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-lg opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                      {slide.description}
                    </p>
                    <a href="#contact">
                      <Button size="lg" className="bg-navy hover:bg-navy/90 text-primary-foreground px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-navy/20 opacity-0 animate-slide-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                        Contact Us
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  currentSlide === index ? "bg-navy w-8" : "bg-border w-3 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" ref={aboutSection.ref}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className={`relative ${aboutSection.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} transition-all duration-1000`}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 hover-lift">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-accent text-accent-foreground rounded-xl p-4 text-center font-bold hover:scale-105 transition-transform duration-300 cursor-default">
                    <span className="block text-lg">INDIRECT</span>
                    <span className="block text-sm">TAX</span>
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-xl p-4 text-center font-bold hover:scale-105 transition-transform duration-300 cursor-default">
                    <span className="block text-lg">DIRECT</span>
                    <span className="block text-sm">TAX</span>
                  </div>
                  <div className="bg-secondary text-secondary-foreground rounded-xl p-4 text-center font-bold hover:scale-105 transition-transform duration-300 cursor-default">
                    <span className="block text-lg">GST</span>
                  </div>
                </div>
                <div className="mt-6 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center animate-pulse-soft">
                      <Calculator className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Est. 2020</p>
                      <p className="text-sm text-muted-foreground">5+ Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`${aboutSection.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} transition-all duration-1000 delay-200`}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy dark:text-primary mb-6">About us</h2>
              <p className="text-secondary font-medium mb-6">Accounting, Tax, Business Advisory and Financial Management</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">Radhey Shyam & Associates</strong> work with individuals and businesses to expand their growth potential and achieve their financial goals. We adopt a partnership-style approach with our clients that lets us maintain focus on what is important to them and engage in long-lasting relationships.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We do our work keenly, which means you are always taken care of by a friendly team of experts who are always ready to use their skill to help you be successful. Established in <strong className="text-foreground">2020</strong>, we have grown to become one of Gurugram's trusted Chartered Accountant firms.
              </p>
              <div className="flex items-center gap-4 p-5 bg-muted/50 rounded-xl hover:bg-muted/70 transition-colors duration-300 group">
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-display font-bold">RS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">CA Radhey Shyam</h4>
                  <p className="text-sm text-muted-foreground">Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-navy relative overflow-hidden" ref={statsSection.ref}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent animate-shimmer" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center text-primary-foreground ${statsSection.isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"} transition-all duration-700`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-secondary animate-bounce-subtle" style={{ animationDelay: `${index * 0.2}s` }} />
                <div className="font-display text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30" ref={servicesSection.ref}>
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 ${servicesSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy dark:text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial services tailored to meet all your business and personal accounting needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group hover-lift border-0 bg-card ${servicesSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy dark:group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-navy dark:text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className={`mt-12 p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 ${servicesSection.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "600ms" }}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">Additional Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["ROC Compliance & Filing", "Section 8 Registration", "Partnership Firm Registration", "Advisory Services", "Financial Planning", "Tax Planning"].map((service, i) => (
                <span 
                  key={i} 
                  className="px-5 py-2.5 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-navy hover:text-primary-foreground dark:hover:bg-primary transition-all cursor-default hover:scale-105 duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" ref={contactSection.ref}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`${contactSection.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} transition-all duration-1000`}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy dark:text-primary mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-10">
                Ready to take control of your finances? Contact us today for a free consultation.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Office Address", content: "307, Ganpati Arcade, Gurudwara Road, Gurgaon - 122001" },
                  { icon: Phone, title: "Phone Numbers", content: "+91 9467263614 | 0124-4073565" },
                  { icon: Clock, title: "Working Hours", content: "Monday - Saturday: 10:00 AM - 7:00 PM" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl hover:bg-muted/70 transition-all duration-300 group hover:translate-x-2"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 ${contactSection.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              <form className="space-y-5">
                {["Your Name", "Your Email", "Your Phone"].map((placeholder, index) => (
                  <div key={index}>
                    <input 
                      type={placeholder.includes("Email") ? "email" : placeholder.includes("Phone") ? "tel" : "text"}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                ))}
                <div>
                  <textarea 
                    rows={4}
                    placeholder="Your Message" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none duration-300 hover:border-primary/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-primary-foreground py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-navy/20 group">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-primary-foreground py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary-foreground/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                <img src={caLogo} alt="CA India Logo" className="w-12 h-12 object-contain bg-white rounded-lg p-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-display font-bold">Radhey Shyam & Associates</h4>
                  <p className="text-xs text-primary-foreground/60">Chartered Accountants</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Your trusted partner for all accounting, tax, and business advisory services since 2020.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                {["Home", "About Us", "Services", "Contact"].map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link === "Home" ? "#" : `#${link.toLowerCase().replace(" ", "")}`} 
                      className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>307, Ganpati Arcade, Gurudwara Road</li>
                <li>Gurgaon - 122001</li>
                <li>Phone: +91 9467263614</li>
                <li>Landline: 0124-4073565</li>
                <li>
                  <a href="mailto:carsnaharwal@gmail.com" className="hover:text-secondary transition-colors">
                    carsnaharwal@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919467263614" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Radhey Shyam & Associates. All rights reserved.</p>
            <p className="mt-2">
              Managed and Developed by{" "}
              <a href="https://paripathsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline transition-colors">
                Paripath Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
