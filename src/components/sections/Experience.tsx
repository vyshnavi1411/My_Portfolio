"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Cloud, Users } from "lucide-react";

export function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <SectionWrapper id="experience" title="Training & Activities">
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Training */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
             <Cloud className="text-primary" /> Technical Training
          </h3>

          <motion.div variants={item} className="group">
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300">
              <span className="text-sm font-mono text-primary/80 mb-2 block uppercase tracking-widest">June 2025 - July 2025</span>
              <h4 className="text-xl font-bold text-foreground mb-1">Cloud Computing with AWS</h4>
              <p className="text-muted-foreground font-medium mb-4">Cipher Schools</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground/80">
                  <span className="text-primary mt-1">▹</span>
                  <p>In-depth hands-on experience with AWS core services including EC2, S3, IAM, and VPC.</p>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground/80">
                  <span className="text-primary mt-1">▹</span>
                  <p>Implemented complex resource monitoring, load balancing, and secure storage configurations.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Extracurricular */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
             <Users className="text-primary" /> Extracurricular Activities
          </h3>

          <motion.div variants={item}>
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">HackWithVerbs 1.0</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">Participated in a high-intensity 24-hour hackathon, collaborating on innovative solutions under tight deadlines.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Community Development Project (CDP)</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">Contributed to local community welfare initiatives, focusing on sustainable development and social impact.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
