"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Home, User, FolderKanban, Wrench, Send } from "lucide-react"

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: FolderKanban, label: "Projects" },
  { id: "skills", icon: Wrench, label: "Skills" },
  { id: "contact", icon: Send, label: "Contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/lmlamoste-ops", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lmlamoste@universityofbohol.edu.ph", label: "Email" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-20 md:w-24 flex flex-col items-center justify-between py-8 z-50 bg-background/50 backdrop-blur-sm border-r border-border"
    >
      {/* Logo */}
      <a href="#home" className="text-2xl font-bold text-foreground">
        L<span className="text-primary">L</span>
      </a>

      {/* Navigation */}
      <nav className="flex flex-col items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex items-center justify-center"
            >
              <motion.div
                className={`p-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                {item.label}
              </div>
            </a>
          )
        })}
      </nav>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <div className="w-px h-16 bg-border mt-2" />
      </div>
    </motion.aside>
  )
}
