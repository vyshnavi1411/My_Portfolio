"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { SiInfosys } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

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
    date: "Jan 2025",
    link: "https://drive.google.com/file/d/1NNKSrw4s_kvPu1CrbdSY09uGLjzshdDA/view?pli=1",
    icon: <FaMicrosoft size={28} />
  },
  {
    title: "Build Generative AI Apps",
    issuer: "Infosys Springboard",
    date: "July 2025",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157683688415232146/1-bd4197b6-b63e-4dd6-9681-3bb3d43224b8.pdf",
    icon: <SiInfosys size={40} />
  },
  {
    title: "DevOps AI Solutions in Azure",
    issuer: "Microsoft",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/1KiIpISeSfhBTCBHJZh0qqJVeHGrnXtVB/view",
    icon: <FaMicrosoft size={28} />
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
    <SectionWrapper id="education" title="Education & Certificates">
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

          <div className="mt-24">
            <div className="mb-12">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <Award className="text-primary w-8 h-8" />
                <span>Certificates</span>
              </h3>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Continuous learning and professional development to stay current with the latest cloud and DevOps technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative h-full bg-card/60 backdrop-blur-sm border border-border/50 p-6 sm:p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 group/card"
                  >
                    <div className="absolute top-4 right-4 text-muted-foreground/30 group-hover/card:text-primary/70 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                    <div className="flex flex-col items-center text-center gap-4 h-full transform group-hover/card:-translate-y-2 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-300 shrink-0">
                        {cert.icon || <Award size={32} />}
                      </div>
                      <div className="flex-1 flex flex-col justify-center w-full mt-2">
                        <h4 className="font-bold text-lg text-foreground mb-2 group-hover/card:text-primary transition-colors leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground font-medium mb-4">{cert.issuer}</p>
                      </div>
                      <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-xs font-mono text-foreground border border-border/50 w-full justify-center">
                        <span className="text-muted-foreground">Issued:</span>
                        <span className="font-semibold">{cert.date}</span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
