// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://storage.googleapis.com',
    base: '/jumex-hydrolit-static',
    vite: {
        plugins: [tailwindcss()],
    },
});