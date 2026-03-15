"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "August 2023 – Present",
    score: "CGPA: 8.41",
    description: "Focusing on core computer science principles, software engineering, and cloud technologies."
  },
  {
    institution: "Narayana Junior College",
    location: "Hyderabad, Telangana",
    degree: "Intermediate",
    period: "April 2022 - March 2023",
    score: "Percentage: 97.5%",
    description: "Completed secondary education with a focus on Mathematics, Physics, and Chemistry."
  },
  {
    institution: "Carmel Convent High School",
    location: "Mancherial, Telangana",
    degree: "High School Matriculation",
    period: "April 2020 - March 2021",
    score: "Percentage: 89.2%",
    description: "Completed primary education with academic excellence."
  }
];

const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2025"
  },
  {
    title: "Build Generative AI Apps",
    issuer: "Infosys Springboard",
    date: "July 2025"
  },
  {
    title: "DevOps AI Solutions in Azure",
    issuer: "Microsoft",
    date: "Nov 2023"
  }
];

export function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper id="education" title="Education & Certifications">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Timeline */}
          <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-12">
            {education.map((edu, idx) => (
              <motion.div key={idx} variants={item} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                <div className="bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <GraduationCap className="text-primary" /> {edu.institution}
                    </h3>
                    <span className="text-sm font-mono text-primary/70">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground/60 mb-2 font-medium">{edu.location}</p>
                  <h4 className="text-xl text-foreground/90 font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Certifications within the same line of time or separate section? Usually, education is main. Let's make certs a grid below or parallel. The user asked for timeline for education specifically. */}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" /> Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  variants={item}
                  className="bg-card/30 border border-border/50 p-5 rounded-xl hover:border-primary/20 transition-all group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-primary/60 mt-1">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
