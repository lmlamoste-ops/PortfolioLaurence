"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, ImageIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Chillingan",
    description: "A restaurant order and reservation dashboard with a clean UI.",
    tags: ["React", "Tailwind", "Firebase"],
    previewImage: "/project/Chillingan/ChillingaOrder.png",
    galleryImages: [
      "/project/Chillingan/ChillinganReservation.png",
      "/project/Chillingan/ChillinganOrdering.png",
      "/project/Chillingan/ChillingaOrder.png",
    ],
  },
  {
    title: "Reservation System",
    description: "A booking workflow with multiple screens for scheduling and confirmation.",
    tags: ["React", "TypeScript", "Node.js"],
    previewImage: "/project/ReservationSystem/Screenshot 2026-05-19 164236.png",
    galleryImages: [
      "/project/ReservationSystem/Screenshot 2026-05-19 164236.png",
      "/project/ReservationSystem/Screenshot 2026-05-19 164248.png",
      "/project/ReservationSystem/Screenshot 2026-05-19 164251.png",
      "/project/ReservationSystem/Screenshot 2026-05-19 164257.png",
      "/project/ReservationSystem/Screenshot 2026-05-19 164301.png",
    ],
  },
  {
    title: "Portfolio",
    description: "A personal portfolio site with polished project presentation and contact flow.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    previewImage: "project/Portfolio/Screenshot 2026-05-19 165133.png",
    galleryImages: ["project/Portfolio/Screenshot 2026-05-19 165133.png"],
  },
]

function ProjectCard({ project, delay }: { project: typeof projects[number]; delay: number }) {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-colors"
    >
      <Dialog open={open} onOpenChange={(value) => { setOpen(value); if (value) setCurrentImage(0) }}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="mb-4 w-full overflow-hidden rounded-3xl border border-border bg-card relative transition-shadow hover:shadow-lg"
          >
            <Image
              src={project.previewImage}
              alt={`${project.title} preview`}
              width={880}
              height={550}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
              <span className="rounded-full bg-black/70 px-3 py-1">
                View project images
              </span>
              <ImageIcon className="h-4 w-4" />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
              <Image
                src={project.galleryImages[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                width={1200}
                height={720}
                className="w-full object-contain bg-black"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentImage((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/70 hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
              <span className="text-sm text-muted-foreground">
                {currentImage + 1} / {project.galleryImages.length}
              </span>
              <button
                type="button"
                onClick={() => setCurrentImage((prev) => (prev + 1) % project.galleryImages.length)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/70 hover:text-foreground"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            A selection of projects I&apos;ve worked on, showcasing my skills in development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
