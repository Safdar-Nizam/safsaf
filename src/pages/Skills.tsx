import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { TechBadge } from "@/components/TechBadge";

const skillCategories = [
  {
    name: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "Bash", "HTML", "CSS"],
  },
  {
    name: "AI & ML",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "Hugging Face", "MLflow"],
  },
  {
    name: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Git", "GitLab CI/CD"],
  },
  {
    name: "Data & Observability",
    skills: ["Redis", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark", "Prometheus", "Grafana", "ChromaDB", "Pinecone"],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-primary">
              Skills
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building intelligent systems, from AI/ML to cloud infrastructure.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "glass-strong gold-border text-primary glow-primary"
                  : "glass border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 lg:p-12 warm-shadow">
            <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">
              {skillCategories[activeCategory].name}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TechBadge name={skill} variant="primary" className="text-base py-2 px-4" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Skills Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">Complete Skill Matrix</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass rounded-xl p-6 warm-shadow"
              >
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} variant="muted" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
