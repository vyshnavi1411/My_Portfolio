"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Terminal, Cloud, Database, Server, ChevronDown, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const prefix = "Hi, I'm ";
  const name = "Kusukuntla Vyshnavi";
  const headline = "Aspiring DevOps & Cloud Specialist";
  
  const prefixCount = useMotionValue(0);
  const nameCount = useMotionValue(0);
  
  const roundedPrefix = useTransform(prefixCount, (latest) => Math.round(latest));
  const roundedName = useTransform(nameCount, (latest) => Math.round(latest));
  
  const displayPrefix = useTransform(roundedPrefix, (latest) => prefix.slice(0, latest));
  const displayName = useTransform(roundedName, (latest) => name.slice(0, latest));

  const [isPrefixDone, setIsPrefixDone] = useState(false);
  const [isNameDone, setIsNameDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const sequence = async () => {
      // Type prefix
      await animate(prefixCount, prefix.length, {
        type: "tween",
        duration: 1.0,
        ease: "easeInOut",
        delay: 0.5,
      });
      setIsPrefixDone(true);

      // Type name
      await animate(nameCount, name.length, {
        type: "tween",
        duration: 1.8,
        ease: "easeInOut",
      });
      setIsNameDone(true);
    };

    sequence();
  }, [prefixCount, nameCount, prefix.length, name.length]);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Animations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
           animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-primary/50"
        >
          <Cloud size={120} />
        </motion.div>
        
        <motion.div
           animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] right-[15%] text-purple-500/30"
        >
          <Server size={140} />
        </motion.div>

        <motion.div
           animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[30%] text-blue-500/20"
        >
          <Database size={80} />
        </motion.div>
        
        <motion.div
           animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] left-[25%] text-indigo-500/30"
        >
          <Terminal size={100} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-center md:text-left w-full hover:z-20">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center md:items-start flex-1 mt-8 md:mt-0">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 flex flex-col items-center md:items-start gap-3"
          >
            <motion.span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
              {displayPrefix}
            </motion.span>
            <div className="flex items-center gap-x-3">
              <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                {displayName}
              </motion.span>
              {!isNameDone && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="inline-block w-[4px] h-[1em] bg-primary"
                />
              )}
            </div>
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 flex items-center justify-center md:justify-start">
            {headline}
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-lg text-muted-foreground/80 mb-10"
          >
            Passionate about Bridging the gap between development and operations through automation, cloud-native solutions, and robust CI/CD pipelines.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Vyshnavi.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-input bg-background/50 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-full p-2 bg-gradient-to-r from-primary/50 to-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.3)] flex-shrink-0"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] relative rounded-full overflow-hidden border-[6px] border-background">
            <Image
              src="/profile.jpg"
              alt="Kusukuntla Vyshnavi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
      >
        <span className="text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
    </section>
  );
}
