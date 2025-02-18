import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { globalConst } from "vite-plugin-global-const";

const remoteUrl = "https://irserver2.eku.edu/libraries/remote/resources.cjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), globalConst({ remoteUrl })],
});
