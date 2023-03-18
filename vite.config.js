import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./assets"),
      components: path.resolve(__dirname, "./components"),
      hooks: path.resolve(__dirname, "./hooks"),
      layout: path.resolve(__dirname, "./layout"),
      pages: path.resolve(__dirname, "./pages"),
      providers: path.resolve(__dirname, "./providers"),
      src: path.resolve(__dirname, "./src"),
      styles: path.resolve(__dirname, "./styles"),
      themes: path.resolve(__dirname, "./themes"),
      utils: path.resolve(__dirname, "./utils"),
    },
  },
});
