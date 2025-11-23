import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { GlassCard } from "@/components/GlassCard";

export default function Education() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Leadership
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence combined with technical leadership in AI and machine learning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <GlassCard className="group">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 glow-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">
                      Florida Atlantic University
                    </h2>
                    <span className="text-sm px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                      2024 – 2025
                    </span>
                  </div>
                  <p className="text-xl text-muted-foreground mb-2">Boca Raton, Florida</p>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold">Master of Computer Science</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border/50">
                {/* Focus Area */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="font-display font-semibold text-lg">Focus Area</h3>
                  </div>
                  <div className="space-y-2 pl-4">
                    <p className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Artificial Intelligence (Minor)</span>
                    </p>
                    <p className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Machine Learning Systems</span>
                    </p>
                    <p className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>AI Systems Architecture</span>
                    </p>
                    <p className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Data Engineering & MLOps</span>
                    </p>
                  </div>
                </div>

                {/* Leadership */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Leadership Role</h3>
                  </div>
                  <div className="glass-strong rounded-lg p-4">
                    <p className="font-semibold text-primary mb-2">AI Lead</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Google Developer Student Club
                    </p>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>Led AI/ML workshops and technical sessions</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>Organized hackathons and AI project showcases</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>Mentored students in ML engineering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Coursework Highlights */}
              <div className="pt-6 border-t border-border/50">
                <h3 className="font-display font-semibold text-lg mb-4">Key Coursework & Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Advanced Machine Learning",
                    "Deep Learning Systems",
                    "Natural Language Processing",
                    "AI Systems Design",
                    "Distributed Systems",
                    "Cloud Computing Architecture",
                  ].map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
}
