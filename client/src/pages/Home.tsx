/* Contemporary Minimalism with Editorial Elegance
 * Design: Generous whitespace, refined typography, soft shadows, sophisticated palette
 * Layout: Centered narrow column (max 720px), ample vertical spacing (120px between sections)
 * Typography: Playfair Display (name), Lora (section headers), Source Sans Pro (body)
 * Colors: Soft off-white bg, deep navy text, muted gold accents, cool gray secondary
 */

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/images/pattern-accent.png)',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
  <div className="resume">

      {/* Hero section with elegant background */}
      <section className="relative flex items-center justify-center py-10 md:py-16">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 max-w-[720px] mx-auto px-6 py-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 tracking-tight">
            Peter Mwendia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
            Django Backend Developer
          </p>
          
          {/* Contact information */}
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-muted-foreground mb-4">
            <a 
              href="mailto:ptermwendia@gmail.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              ptermwendia@gmail.com
            </a>
            <a 
              href="tel:+254795445889" 
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              +254 795 445 889
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nairobi, Kenya
            </span>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <a href="https://www.linkedin.com/in/peter-mwendia-a2749323a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <a href="https://github.com/pete-mwendia" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-[720px] mx-auto px-6 pb-12">
        
        {/* Professional Summary */}
        <section ref={addToRefs} className="mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Professional Summary
          </h2>
          <div className="divider-elegant mb-6" />
          <p className="text-base leading-relaxed text-foreground/90">
            Results-driven and highly skilled Django Backend Developer with 2+ years of experience in designing, developing, and deploying scalable and efficient web applications. Proven expertise in Python, Django, RESTful APIs, and database management, with hands-on experience in cloud platforms (AWS/GCP) and containerization using Docker. A collaborative team player with excellent communication skills, adept at working in cross-cultural environments and delivering high-quality software solutions that meet client needs.
          </p>
        </section>

        {/* Skills */}
        <section ref={addToRefs} className="mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Technical Skills
          </h2>
          <div className="divider-elegant mb-6" />
          
          <div className="space-y-4">
            <SkillCategory 
              title="Languages" 
              skills={["Python", "JavaScript", "SQL"]} 
            />
            <SkillCategory 
              title="Frameworks & Libraries" 
              skills={["Django", "Django REST Framework", "Flask", "FastAPI", "Node.js", "React.js"]} 
            />
            <SkillCategory 
              title="Databases" 
              skills={["PostgreSQL", "MySQL", "MongoDB", "Redis"]} 
            />
            <SkillCategory 
              title="Cloud & DevOps" 
              skills={["AWS (EC2, S3)", "GCP", "Docker", "CI/CD", "Nginx", "Git"]} 
            />
            <SkillCategory 
              title="Testing & Other" 
              skills={["Unit Testing", "Integration Testing", "RESTful API Design", "Microservices", "Agile/Scrum"]} 
            />
          </div>
        </section>

        {/* Professional Experience */}
        <section ref={addToRefs} className="mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Professional Experience
          </h2>
          <div className="divider-elegant mb-6" />
          
          <div className="space-y-8">
            <ExperienceItem
              title="Founder & Software Engineer"
              company="Datalyft Analytics"
              location="Remote, Kenya"
              period="Jun 2024 – Present"
              responsibilities={[
                "Architected and developed scalable full-stack applications for external clients, leading the entire product development lifecycle from concept to deployment.",
                "Designed and implemented advanced AI/ML models for media verification, including a Python-based deepfake video detection tool, directly aligning with modern security and data integrity requirements.",
                "Collaborated closely with clients to define technical requirements and deliver customized software solutions that address complex business challenges."
              ]}
            />

            <ExperienceItem
              title="Full-stack Software Engineer"
              company="Freelance"
              location="Remote, Kenya"
              period="May 2024 – May 2025"
              responsibilities={[
                "Designed and built comprehensive web applications for clients using a range of technologies including Django, React, and PHP, with a focus on creating reliable and responsive backend logic and APIs.",
                "Optimized SQL and NoSQL database schemas (PostgreSQL, MySQL) for performance and scalability, and deployed applications using Docker, CI/CD pipelines, and AWS (EC2/S3).",
                "Integrated advanced AI-based features, including LLMs and LangChain, and connected with third-party APIs to extend application functionality."
              ]}
            />

            <ExperienceItem
              title="IT Department Intern"
              company="Chechi Limited"
              location="Nairobi, Kenya"
              period="May 2023 – Aug 2023"
              responsibilities={[
                "Contributed to the development and maintenance of both backend and frontend systems, demonstrating strong problem-solving skills and attention to detail.",
                "Quickly identified and resolved bugs, expediting application deployment cycles and improving system stability."
              ]}
            />
          </div>
        </section>

        {/* Projects */}
        <section ref={addToRefs} className="mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <div className="divider-elegant mb-6" />
          
          <div className="space-y-6">
            <ProjectItem
              title="Django Mpesa Integration"
              description="Developed a web application that integrates the Mpesa payment gateway with Django, enabling seamless and secure mobile money transactions. This project includes secure transaction processing and a RESTful API for mobile development."
              link="https://github.com/pete-mwendia/django-mpesa"
            />
            
            <ProjectItem
              title="Feature Extraction System using CNN and Scikit-learn"
              description="Developed a system that leverages Convolutional Neural Networks (CNN) and Scikit-learn for extracting and analyzing features from images. This project showcases a robust pipeline for preprocessing, feature extraction, and classification."
              link="https://github.com/pete-mwendia/feature-extraction"
            />
          </div>
        </section>

        {/* Education */}
        <section ref={addToRefs} className="mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Education
          </h2>
          <div className="divider-elegant mb-6" />
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Bachelor of Science in Software Engineering
            </h3>
            <p className="text-muted-foreground mb-1">
              Murang'a University of Technology
            </p>
            <p className="text-sm text-accent font-semibold">
              Sept 2019 – May 2024
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section ref={addToRefs} className="mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
            Professional Certifications
          </h2>
          <div className="divider-elegant mb-6" />
          
          <div className="space-y-2 text-center">
            <CertificationItem title="Meta Back-End Developer Professional Certificate" />
            <CertificationItem title="Meta Database Engineer Professional Certificate" />
            <CertificationItem title="Meta Programming with Python" />
            <CertificationItem title="DeepLearning.AI Natural Language Processing with Probabilistic Models" />
            <CertificationItem title="DeepLearning.AI Neural Networks and Deep Learning" />
          </div>
        </section>

      </main>

      {/* Print button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.print()}
          size="lg"
          className="shadow-lg hover:shadow-xl transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Download PDF
        </Button>
      </div>

      {/* Screen-only animations */}
      <style>{`
        .fade-in {
          opacity: 0;
          filter: blur(4px);
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-visible {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }
      `}</style>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-accent mb-2">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-card text-foreground border border-border rounded-md text-xs hover:border-accent hover:shadow-sm transition-all duration-300"
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.08}s backwards`
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ 
  title, 
  company, 
  location, 
  period, 
  responsibilities 
}: { 
  title: string; 
  company: string; 
  location: string; 
  period: string; 
  responsibilities: string[];
}) {
  return (
    <div className="print-avoid-break relative pl-8 border-l-2 border-accent/30">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
      
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-foreground mb-0.5">{title}</h3>
        <p className="text-accent font-semibold text-sm mb-0.5">{company}</p>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span>{location}</span>
          <span>•</span>
          <span>{period}</span>
        </div>
      </div>
      
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-sm text-foreground/90 leading-snug">
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectItem({ 
  title, 
  description, 
  link 
}: { 
  title: string; 
  description: string; 
  link: string;
}) {
  return (
    <div className="print-avoid-break group">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 transition-colors duration-300 flex-shrink-0"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-sm text-foreground/90 leading-snug">{description}</p>
    </div>
  );
}

function CertificationItem({ title }: { title: string }) {
  return (
    <p className="text-foreground/90">{title}</p>
  );
}
