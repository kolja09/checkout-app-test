import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "MyNrgCheckoutApp",
      fileName: () => `nrg-checkout-app.js`,
      formats: ["umd"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        exports: "named", // Добавлено для корректной обработки именованных экспортов
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "nrg-checkout-app.css";
          }
          return assetInfo.name || "nrg-checkout-app-[name][extname]";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
    },
  },
});
