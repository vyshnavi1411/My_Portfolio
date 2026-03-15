"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export function SectionWrapper({ children, id, className, title }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 overflow-hidden relative", className)}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {title && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mb-16 flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center relative inline-block">
              {title}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full" />
            </h2>
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
