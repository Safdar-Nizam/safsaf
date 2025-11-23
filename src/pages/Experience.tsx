import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { GlassCard } from "@/components/GlassCard";

const experiences = [
  {
    company: "Help Us Grow Foundation",
    location: "Florida, USA",
    role: "AI Systems Engineer",
    period: "May 2025 – Nov 2025",
    url: "https://www.hugreadingprogram.org",
    images: [
      "/images/hug-award.jpg",
      "/images/hug-group.jpg",
    ],
    achievements: [
      "Built an internal retrieval platform using LangChain, Flowise, Llama 3.1, and Mistral with routing logic, metadata indexing, vector search optimization, and quality controls, improving retrieval consistency and reducing query latency.",
      "Developed backend services using Python, FastAPI, Pydantic with schema refinement, automated health checks, observability hooks, and scheduled indexing processes, supporting ~7,000 monthly users and reducing backend error rates by 22%.",
      "Designed event-driven workflows using Google Sheets API, Monday.com, Zapier, and n8n, adding validation and synchronization logic that reduced manual update effort by ~10 hours per week.",
    ],
  },
  {
    company: "J and G Software Solutions",
    location: "Florida, USA",
    role: "AI Engineer",
    period: "Oct 2024 – Apr 2025",
    achievements: [
      "Optimized a React + Tailwind + TypeScript frontend with clearer component boundaries, render optimizations, and routing improvements, increasing interaction performance by 14%.",
      "Enhanced REST and GraphQL layers with robust authentication, cache refinement, error monitoring, and structured failure reporting, reducing API failure frequency by ~25%.",
      "Implemented CI-based schema validation and automated contract testing for REST and GraphQL endpoints using TypeScript tooling and GitHub Actions.",
    ],
  },
  {
    company: "MaanPaa INTL Pvt Ltd",
    location: "India",
    role: "ML Engineer",
    period: "Oct 2022 – May 2023",
    achievements: [
      "Improved malware analysis and SIEM workflows using Python, Java, scikit-learn, with structured feature pipelines and consistent labeling, increasing detection accuracy by 15%.",
      "Maintained ML operations pipelines with Docker, GitLab CI/CD, Kubernetes, Kubeflow, improving deployment speed and reliability.",
      "Unified telemetry inputs with inference systems to improve alert thresholds and reduce false positives.",
    ],
  },
];

export default function Experience() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary">
              Experience
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems, scalable backends, and MLOps pipelines across AI-focused organizations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary opacity-40" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary glow-primary z-10 border-2 border-card" />

                {/* Content Card */}
                <div className={`flex-1 pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <GlassCard hover={false}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h3 className="text-2xl font-display font-bold text-primary">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/40 px-3 py-1 rounded-full border border-border/40">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                          >
                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Company link + images (if provided) */}
                      <div className="pt-4">
                        {exp.url && (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                            Visit {exp.company}
                          </a>
                        )}

                        {exp.images && (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {exp.images.map((src, idx) => (
                              <a key={idx} href={src} target="_blank" rel="noopener noreferrer" className="block">
                                <img src={src} alt={`${exp.company} ${idx + 1}`} className="w-full max-w-md h-auto object-cover rounded-lg border border-card warm-shadow" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
