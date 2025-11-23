import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, FolderGit2, Code2, GraduationCap, Award, Mail } from "lucide-react";
import { TypeWriter } from "@/components/TypeWriter";
import { TechBadge } from "@/components/TechBadge";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const techStack = [
  "Python", "FastAPI", "LangChain", "TensorFlow", "AWS", "Docker", "Kubernetes"
];

const floatingChips = [
  { text: "LLMs", x: 80, y: 20, delay: 0 },
  { text: "RAG", x: -60, y: 40, delay: 0.2 },
  { text: "FastAPI", x: 90, y: 70, delay: 0.4 },
  { text: "K8s", x: -80, y: 80, delay: 0.6 },
  { text: "LangChain", x: 70, y: -30, delay: 0.8 },
];

const quickLinks = [
  { icon: Briefcase, title: "Experience", desc: "AI Systems Engineer building LLM platforms", path: "/experience" },
  { icon: FolderGit2, title: "Projects", desc: "Mirage AI, Dark Web Detection & more", path: "/projects" },
  { icon: Code2, title: "Skills", desc: "Python, FastAPI, LangChain, ML/AI tech", path: "/skills" },
  { icon: GraduationCap, title: "Education", desc: "MS in CS from Florida Atlantic University", path: "/education" },
  { icon: Award, title: "Certifications", desc: "AWS, Microsoft, Cisco & Google certified", path: "/certifications" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center gap-12 mb-32">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-foreground">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary">
                Safdar Nizam Mohammed
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground">
              AI Systems Engineer building intelligent systems and scalable data pipelines.
            </p>

            <div className="h-16 flex items-center">
              <TypeWriter
                phrases={[
                  "LLM & RAG Systems",
                  "AI Systems Design",
                  "MLOps & Deployment",
                  "High-Performance Backends",
                  "Cloud-Native Automation",
                ]}
                className="text-2xl lg:text-3xl font-display font-semibold text-primary"
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium glow-primary group border border-primary/30 warm-shadow">
                <Link to="/experience">
                  View Experience
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-medium warm-shadow">
                <Link to="/contact">
                  Contact Me
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-8">
              {techStack.map((tech, index) => (
                <TechBadge key={tech} name={tech} variant="primary" />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Avatar with Floating Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Central Avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary-glow to-primary glow-primary flex items-center justify-center warm-shadow">
                <div className="w-[95%] h-[95%] rounded-full bg-card flex items-center justify-center border-2 border-primary/20">
                  <span className="text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-glow to-primary">
                    SN
                  </span>
                </div>
              </div>

              {/* Floating Chips */}
              {floatingChips.map((chip, index) => (
                <motion.div
                  key={chip.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + chip.delay, duration: 0.4 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${chip.x}px)`,
                    top: `calc(50% + ${chip.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: chip.delay }}
                    className="glass px-4 py-2 rounded-full border border-primary/40 text-sm font-medium whitespace-nowrap text-foreground warm-shadow"
                  >
                    {chip.text}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quick Overview Cards */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-display font-bold text-center mb-12 text-foreground"
          >
            Explore My Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={link.path} to={link.path}>
                <GlassCard delay={index * 0.1} className="h-full group">
                  <link.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">{link.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{link.desc}</p>
                  <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-display font-bold text-center mb-12 text-foreground"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link to="/projects">
              <GlassCard className="group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">Mirage</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground border border-secondary/40 font-medium">
                      2025
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    AI-powered networking platform with layered circular graphs and real-time data synchronization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "D3.js", "FastAPI", "LangChain", "ChromaDB"].map((tech) => (
                      <TechBadge key={tech} name={tech} variant="muted" />
                    ))}
                  </div>
                  <div className="pt-4 flex items-center text-primary font-medium">
                    View Case Study
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>

            <Link to="/projects">
              <GlassCard className="group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">Dark Web Traffic Detection</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground border border-secondary/40 font-medium">
                      2024
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Advanced traffic identification system using XGBoost and CNN-GRU with attention mechanisms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "XGBoost", "TensorFlow", "CNN-GRU"].map((tech) => (
                      <TechBadge key={tech} name={tech} variant="muted" />
                    ))}
                  </div>
                  <div className="pt-4 flex items-center text-primary font-medium">
                    View Case Study
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
