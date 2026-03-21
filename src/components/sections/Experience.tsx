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

              {/* Training Certificate Link */}
              <a 
                href="https://www.cipherschools.com/certificate/preview?id=687e50387efd6d5090703e99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 w-full flex flex-col items-center justify-center gap-3 py-8 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group/cert cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover/cert:scale-110 transition-transform duration-300">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-foreground/80 group-hover/cert:text-primary transition-colors">
                  View Verified Certificate <span className="group-hover/cert:-translate-y-1 group-hover/cert:translate-x-1 transition-transform">↗</span>
                </div>
              </a>

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
                  <div className="w-full">
                    <h5 className="font-bold text-foreground mb-1">Community Development Project (CDP)</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">Contributed to local community welfare initiatives, focusing on sustainable development and social impact.</p>
                    
                    <div className="mt-4 rounded-xl overflow-hidden border border-border/50 bg-muted/20 relative group/cdp">
                      <img 
                        src="/images/CDP.jpg" 
                        alt="Community Development Project" 
                        className="w-full h-auto object-cover max-h-48 transition-transform duration-500 group-hover/cdp:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('p-4', 'flex', 'items-center', 'justify-center');
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.innerHTML = '<span class="text-xs font-mono text-muted-foreground/50">Save image as public/cdp.jpg to display here</span>';
                          }
                        }}
                      />
                    </div>
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
