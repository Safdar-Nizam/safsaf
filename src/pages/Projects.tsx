import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { GlassCard } from "@/components/GlassCard";
import { TechBadge } from "@/components/TechBadge";

const projects = [
  {
    title: "Mirage – AI Powered Networking",
    year: "2025",
    description: "Built a layered circular graph interface with event propagation and scalable state management, improving interface load performance by 12%. Expanded ingestion workflows using Google Sheets API, n8n, Zapier with validation and sync logic, reducing data inconsistency by 30%.",
    tech: ["React", "D3.js", "Node.js", "FastAPI", "Python", "LangChain", "ChromaDB", "GraphQL", "Docker", "NGINX"],
    problem: "Organizations needed an intelligent networking platform with real-time visualization and AI-powered data synchronization.",
    approach: "Designed a multi-layered architecture combining frontend visualization with backend AI systems for data ingestion and retrieval.",
    impact: ["12% improvement in interface load performance", "30% reduction in data inconsistency", "Real-time AI-powered data synchronization"],
  },
  {
    title: "Dark Web Traffic Detection System",
    year: "2024",
    description: "Created a traffic identification pipeline combining classical and deep models, improving detection accuracy by 35% and reducing false classifications across network conditions. Added structured preprocessing logic for packet standardization and robust model evaluation.",
    tech: ["Python", "XGBoost", "CNN-GRU", "Attention Mechanisms", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "Keras"],
    problem: "Network security teams struggled with accurate identification of dark web traffic patterns with high false positive rates.",
    approach: "Developed a hybrid ML pipeline combining XGBoost for classical features and CNN-GRU with attention for sequential patterns.",
    impact: ["35% increase in detection accuracy", "Reduced false classifications", "Robust performance across network conditions"],
  },
  {
    title: "Neural-Symbolic Hybrid System",
    year: "2024",
    description: "Integrated neural networks with symbolic reasoning for enhanced AI interpretability and decision-making capabilities.",
    tech: ["Python", "PyTorch", "Prolog", "Knowledge Graphs"],
    problem: "Pure neural networks lacked interpretability for critical decision-making systems.",
    approach: "Combined deep learning with symbolic AI to create explainable and verifiable AI systems.",
    impact: ["Improved interpretability", "Enhanced reasoning capabilities", "Verifiable decision paths"],
  },
  {
    title: "Decentralized AI Marketplace",
    year: "2023",
    description: "Built a blockchain-based platform for AI model trading and deployment with secure transactions and model versioning.",
    tech: ["Solidity", "Ethereum", "IPFS", "Python", "FastAPI"],
    problem: "AI practitioners needed a secure, decentralized way to share and monetize models.",
    approach: "Leveraged blockchain for transactions and IPFS for model storage with smart contracts for licensing.",
    impact: ["Secure model trading", "Decentralized infrastructure", "Automated licensing"],
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Intelligent systems, ML pipelines, and AI platforms built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 0.1} className="group">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/40 flex-shrink-0 font-medium">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} name={tech} variant="muted" />
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-3 pt-4 border-t border-primary/20">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-foreground mb-1">Approach</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-1">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
