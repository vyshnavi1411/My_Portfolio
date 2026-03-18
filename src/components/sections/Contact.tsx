"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle2, AlertCircle, Loader2, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace YOUR_ACCESS_KEY_HERE with your Web3Forms Access Key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8efd3220-3a0a-416e-9923-a5fc43322fcd",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={item}>
            <h3 className="text-3xl font-bold mb-4">Let&apos;s talk about cloud, infrastructure, and everything DevOps.</h3>

          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <a href="mailto:vyshnavi.kusukuntla@gmail.com" className="flex items-center gap-4 group w-fit">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email me at</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">vyshnavi.kusukuntla@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 group w-fit">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Mancherial, Telangana, India</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/vyshnavikusukuntla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">vyshnavikusukuntla</p>
              </div>
            </a>

            <a href="tel:+919676023214" className="flex items-center gap-4 group w-fit">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">+91 96760 23214</p>
              </div>
            </a>


          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <form className="bg-card/50 border border-border p-8 rounded-2xl flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                id="message" 
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-lg border border-green-500/20"
              >
                <CheckCircle2 size={18} />
                <p className="text-sm font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-destructive bg-destructive/10 p-4 rounded-lg border border-destructive/20"
              >
                <AlertCircle size={18} />
                <p className="text-sm font-medium">Oops! Something went wrong. Please try again or email me directly.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
