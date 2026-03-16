"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Terminal, Code2, CloudCog } from "lucide-react";

export function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hi, I’m Vyshnavi, a Cloud & DevOps enthusiast passionate about building scalable infrastructure and reliable systems.
          </p>
          <p>
            I work with technologies like AWS, Docker, Kubernetes, and CI/CD pipelines to automate deployments and streamline cloud operations. I enjoy solving infrastructure challenges and designing efficient deployment pipelines that improve system performance and reliability.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-card border border-border flex flex-col gap-4 group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <CloudCog size={28} />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Cloud Infrastructure</h3>
              <p className="text-sm text-muted-foreground">Designing scalable, secure, and highly available cloud infrastructure using AWS.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-card border border-border flex flex-col gap-4 group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Terminal size={28} />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">CI/CD Automation</h3>
              <p className="text-sm text-muted-foreground">Building automated CI/CD pipelines using Jenkins and GitHub Actions to enable faster and reliable deployments.</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border flex flex-col gap-4 group hover:border-primary/50 transition-colors sm:col-span-2">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Code2 size={28} />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Infrastructure as Code</h3>
              <p className="text-sm text-muted-foreground">Automating infrastructure provisioning using Terraform and managing containers with Kubernetes.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
