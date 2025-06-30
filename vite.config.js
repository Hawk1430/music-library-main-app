import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "main-app",
      remotes: {
        "music-library-mf": {
          type: "module",
          name: "music-library-mf",
          entry: "https://stellar-sawine-73d5eb.netlify.app/remoteEntry.js",
          entryGlobalName: "music-library-mf",
          shareScope: "default",
        },
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      external: [],
    },
  },
});
