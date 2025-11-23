// Minimal site index used by the client-side retriever.
// Add or edit entries here so the chat can search your site content.
export const SITE_INDEX = [
  {
    id: 'home-hero',
    title: "Home - Hero",
    url: '/',
    content: `Hi, I'm Safdar Nizam Mohammed. AI Systems Engineer building intelligent systems and scalable data pipelines. LLM & RAG Systems, AI Systems Design, MLOps & Deployment, High-Performance Backends, Cloud-Native Automation.`,
  },
  {
    id: 'experience-hug',
    title: 'Help Us Grow Foundation - Experience',
    url: '/experience',
    content: `Built an internal retrieval platform using LangChain, Flowise, Llama 3.1, and Mistral with routing logic, metadata indexing, vector search optimization, and quality controls. Developed backend services using Python, FastAPI, Pydantic with schema refinement, automated health checks, and observability hooks. Designed event-driven workflows using Google Sheets API, Monday.com, Zapier, and n8n.`,
  },
  {
    id: 'experience-jg',
    title: 'J and G Software Solutions - Experience',
    url: '/experience',
    content: `Optimized a React + Tailwind + TypeScript frontend with clearer component boundaries, render optimizations, and routing improvements. Enhanced REST and GraphQL layers with robust authentication and cache refinement. Implemented CI-based schema validation and automated contract testing.`,
  },
  {
    id: 'projects-summary',
    title: 'Projects Summary',
    url: '/projects',
    content: `Featured projects: Mirage (AI-powered networking), Dark Web Traffic Detection (advanced traffic identification). Technologies: React, D3.js, FastAPI, LangChain, ChromaDB, Python, TensorFlow.`,
  },
];

export default SITE_INDEX;
