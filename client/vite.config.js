import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      "import.meta.env.ENV_VARIABLE": JSON.stringify(process.env.ENV_VARIABLE),
    },
  };
});
