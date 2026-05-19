"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
          className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_0_10px_rgba(13,217,255,0.08)]"
        >
          <Image
            src="/profile.svg"
            alt="Laurence Lamoste"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary mb-4"
        >
          Hello, I&apos;m
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Laurence Lamoste
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          3rd Year Computer Science Student at University of Bohol. 
          I build things for the web.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">
            About Me<span className="text-primary">.</span>
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a passionate Computer Science student with a love for creating 
              digital experiences. Currently in my 3rd year at the University of Bohol, 
              I spend most of my time building web applications and learning new technologies.
            </p>
            <p>
              My journey in tech started with curiosity about how websites work, 
              and it has evolved into a deep passion for full-stack development. 
              I believe in writing clean, efficient code and creating intuitive user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "3rd", label: "Year" },
              { value: "3", label: "Projects" },
              { value: "11", label: "Skills" },
              { value: "100%", label: "Dedicated" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
