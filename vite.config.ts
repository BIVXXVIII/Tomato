import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Tomato",
    plugins: [react()],
    resolve: {
        alias: {
            assets: "/src/assets",
            components: "/src/components",
            helpers: "/src/helpers",
            types: "/src/types",
        },
    },
});
