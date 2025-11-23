import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// NOTE: When deploying to GitHub Pages set `base` to `/REPO_NAME/` (replace below).
// If you prefer to keep the site at the root during local dev, change this value
// or override via an environment variable in your CI workflow.
export default defineConfig(({ mode }) => ({
  // Use root during local dev, and the repo path when building for production
  base: mode === 'development' ? '/' : '/safdar-s-ai-cockpit/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
