import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { GlassCard } from "@/components/GlassCard";

const certifications = [
  {
    name: "AWS AI Practitioner",
    provider: "Amazon Web Services",
    color: "from-orange-500 to-yellow-500",
    description: "AI and ML services on AWS",
  },
  {
    name: "Microsoft AI Fundamentals",
    provider: "Microsoft",
    color: "from-blue-500 to-cyan-500",
    description: "Core AI concepts and Azure AI",
  },
  {
    name: "Cisco DevNet Associate",
    provider: "Cisco",
    color: "from-blue-600 to-indigo-600",
    description: "Software development and APIs",
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    color: "from-orange-500 to-red-500",
    description: "AWS Cloud fundamentals",
  },
  {
    name: "Google Data Analytics",
    provider: "Google",
    color: "from-green-500 to-teal-500",
    description: "Data analysis and visualization",
  },
];

export default function Certifications() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Certifications
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications from leading technology companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <GlassCard key={index} delay={index * 0.1} className="group">
              <div className="space-y-4">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Certification Name */}
                <div>
                  <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">{cert.provider}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Badge indicator */}
                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-primary font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Verified Certification
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-4">Continuous Learning</h2>
            <p className="text-muted-foreground leading-relaxed">
              These certifications represent a commitment to staying current with rapidly evolving AI, cloud, 
              and software development technologies. I actively pursue additional certifications and training 
              to expand my expertise in emerging areas like LLM systems, MLOps, and cloud-native AI deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
