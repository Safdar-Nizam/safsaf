import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // When deploying to GitHub Pages for the repository 'safdar-s-ai-cockpit',
  // set the base path so assets are loaded from '/safdar-s-ai-cockpit/'.
  // Change this to '/' if you publish to a user/org page (username.github.io).
  base: '/safdar-s-ai-cockpit/',
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
