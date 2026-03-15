"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { 
  SiCplusplus, SiC, SiMysql, SiKubernetes, SiJenkins, SiTerraform, SiGithubactions, SiGnubash 
} from "react-icons/si";
import { 
  FaJava, FaPython, FaDocker, FaAws, FaGitAlt, FaGithub, FaGitlab, FaLinux 
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
      { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
      { name: "Java", icon: FaJava, color: "text-[#5382a1]" },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
      { name: "Bash / Shell", icon: SiGnubash, color: "text-[#4EAA25]" },
    ]
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
      { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
      { name: "Terraform", icon: SiTerraform, color: "text-[#844FBA]" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
    ]
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "SQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "GitLab", icon: FaGitlab, color: "text-[#FC6D26]" },
      { name: "Linux", icon: FaLinux, color: "text-white" },
    ]
  }
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <SectionWrapper id="skills" title="Skills & Tools">
      <div className="space-y-12 max-w-6xl mx-auto">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            <h3 className="text-xl font-bold text-foreground/80 border-l-4 border-primary pl-4">
              {category.title}
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {category.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={item}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <Icon className={`w-6 h-6 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="font-semibold text-foreground/90 group-hover:text-primary transition-colors text-sm md:text-base">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
