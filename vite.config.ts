import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test APIs like `describe` and `it`
    environment: "jsdom", // Use jsdom for DOM-based testing
    setupFiles: "./vitest.setup.ts", // Setup file for Vitest
  },
});
