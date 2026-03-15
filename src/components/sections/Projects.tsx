"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Cloud-Native DevOps Architecture for E-Commerce",
    description: "Built an end-to-end DevOps pipeline. Provisioned infrastructure with Terraform, containerized apps using Docker, orchestrated with Kubernetes, and automated CI/CD. Reduced deployment time to under 15 minutes.",
    tags: ["Terraform", "Docker", "Kubernetes", "CI/CD", "AWS"],
    image: "/projects/cloud-native.png",
    github: "https://github.com/Komalpr3t/END-TO-END-DevOps-E-Commerce-Project.git"
  },
  {
    title: "Static Website Hosting using AWS CI/CD",
    description: "Automated the deployment of a high-performance static website on AWS using a custom CI/CD pipeline, ensuring seamless updates and high availability.",
    tags: ["AWS", "CI/CD", "S3", "CloudFront", "GitHub Actions"],
    image: "/projects/static-site.png",
    github: "https://github.com/vyshnavi1411/AWS-CICD.git"
  },
  {
    title: "Cloud Infrastructure Automation & Monitoring Pipeline",
    description: "Implemented an automated DevOps pipeline to provision AWS infrastructure using Terraform and configure a monitoring stack (Prometheus & Grafana) via Ansible through Jenkins CI/CD.",
    tags: ["Jenkins", "Terraform", "AWS", "Ansible", "Prometheus", "Grafana"],
    image: "/projects/infra-automation.png",
    github: "https://github.com/vyshnavi1411/Cloud-Infrastructure-Automation.git"
  }
];

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="group relative flex flex-col bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-mono px-2 py-1 rounded bg-secondary/30 text-primary/70 border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
