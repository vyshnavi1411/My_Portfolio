"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Zap, ShieldCheck, RefreshCw, Network, Globe, Server, Database, Box } from "lucide-react";
import { FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiGithubactions } from "react-icons/si";

export function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE: Intro & Terminal */}
        <motion.div variants={itemVariants} className="space-y-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hi, I’m Vyshnavi. I specialize in <span className="text-foreground font-semibold">Cloud & DevOps</span>, automating deployments and building scalable infrastructure.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-card/10 border border-border/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-50"></div>

            <h4 className="text-sm font-bold text-foreground/80 mb-8 tracking-wider uppercase flex items-center gap-2 relative z-10">
              <Network className="w-4 h-4 text-primary" /> Architecture Flow
            </h4>

            <div className="flex flex-col items-center relative py-2">
              {/* Row 1: Route 53 */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center relative z-10 w-full justify-center"
              >
                <div className="w-40 py-2.5 rounded-lg bg-card border border-border flex items-center justify-center gap-3 shadow-sm hover:border-blue-500/50 transition-colors">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold tracking-wide text-foreground/90">Route 53</span>
                </div>
              </motion.div>

              {/* Line down */}
              <div className="w-0.5 h-6 bg-border/40 relative">
                <motion.div className="absolute inset-0 w-full bg-blue-400/50 origin-top" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1] }} />
              </div>

              {/* Row 2: API Gateway */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center relative z-10 w-full justify-center"
              >
                <div className="w-48 py-2.5 rounded-lg bg-card border border-primary/20 flex items-center justify-center gap-3 shadow-sm hover:border-primary/50 transition-colors bg-primary/5">
                  <Server className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold tracking-wide text-foreground/90">Load Balancer</span>
                </div>
              </motion.div>

              {/* Branching lines */}
              <div className="w-0.5 h-5 bg-border/40 relative">
                <motion.div className="absolute inset-0 w-full bg-purple-400/50 origin-top" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, times: [0, 0.5, 1] }} />
              </div>
              <div className="w-48 h-0.5 bg-border/40 relative flex justify-between">
                <motion.div className="absolute inset-0 w-full bg-purple-400/50 origin-center" animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 0.8, repeat: Infinity, times: [0, 0.5, 1] }} />
                <div className="w-0.5 h-6 bg-border/40 absolute -left-[1px] top-0">
                  <motion.div className="absolute inset-0 w-full bg-green-400/50 origin-top" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.1, repeat: Infinity, times: [0, 0.5, 1] }} />
                </div>
                <div className="w-0.5 h-6 bg-border/40 absolute -right-[1px] top-0">
                  <motion.div className="absolute inset-0 w-full bg-green-400/50 origin-top" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.1, repeat: Infinity, times: [0, 0.5, 1] }} />
                </div>
              </div>

              {/* Row 3: Compute */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-between w-[208px] mt-6 relative z-10"
              >
                <div className="w-20 py-3 rounded-lg bg-card border border-border flex flex-col items-center justify-center gap-2 shadow-sm hover:border-green-500/50 transition-colors hover:bg-green-500/5 mt-1">
                  <Box className="w-5 h-5 text-green-400" />
                  <span className="text-[10px] font-bold tracking-wide">EKS Node</span>
                </div>
                <div className="w-20 py-3 rounded-lg bg-card border border-border flex flex-col items-center justify-center gap-2 shadow-sm hover:border-green-500/50 transition-colors hover:bg-green-500/5 mt-1">
                  <Box className="w-5 h-5 text-green-400" />
                  <span className="text-[10px] font-bold tracking-wide">EKS Node</span>
                </div>
              </motion.div>

              {/* Branching down to DB */}
              <div className="w-48 h-0.5 bg-border/40 relative flex justify-between mt-6">
                <motion.div className="absolute inset-0 w-full bg-yellow-400/50 origin-center" animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.6, repeat: Infinity, times: [0, 0.5, 1] }} />
                <div className="w-0.5 h-6 bg-border/40 absolute -left-[1px] bottom-0">
                  <motion.div className="absolute inset-0 w-full bg-yellow-400/50 origin-bottom" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.3, repeat: Infinity, times: [0, 0.5, 1] }} />
                </div>
                <div className="w-0.5 h-6 bg-border/40 absolute -right-[1px] bottom-0">
                  <motion.div className="absolute inset-0 w-full bg-yellow-400/50 origin-bottom" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.3, repeat: Infinity, times: [0, 0.5, 1] }} />
                </div>
              </div>
              <div className="w-0.5 h-6 bg-border/40 relative">
                <motion.div className="absolute inset-0 w-full bg-yellow-500/50 origin-top" animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 1.9, repeat: Infinity, times: [0, 0.5, 1] }} />
              </div>

              {/* Row 4: Database */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center relative z-10 w-full justify-center"
              >
                <div className="w-40 py-2.5 rounded-lg bg-card border border-yellow-500/20 flex items-center justify-center gap-3 shadow-sm hover:border-yellow-500/50 transition-colors bg-yellow-500/5">
                  <Database className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-bold tracking-wide text-foreground/90">RDS Cluster</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: My DevOps Mindset */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 inline-block">
              My DevOps Mindset
            </h3>
            <div className="h-1 w-20 bg-primary mt-3 rounded-full opacity-50"></div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                title: "Automation First",
                description: "Eliminating manual processes to increase efficiency and dramatically reduce human error.",
                color: "hover:border-yellow-500/30",
                gradient: "from-yellow-500/5 to-transparent"
              },

              {
                icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
                title: "Security & Reliability",
                description: "Building robust systems that ensure high availability with embedded security at every layer.",
                color: "hover:border-green-500/30",
                gradient: "from-green-500/5 to-transparent"
              },
              {
                icon: <RefreshCw className="w-6 h-6 text-purple-500" />,
                title: "Continuous Improvement",
                description: "Constantly monitoring, iterating, and adapting to modern cloud-native tools and practices.",
                color: "hover:border-purple-500/30",
                gradient: "from-purple-500/5 to-transparent"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative flex items-start gap-5 p-5 rounded-2xl bg-card/40 border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm overflow-hidden ${item.color}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${item.gradient}`} />
                <div className="mt-0.5 shrink-0 p-3 bg-card border border-border/50 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-background">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
