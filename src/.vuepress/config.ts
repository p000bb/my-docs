import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    },
  }),
  plugins: [
    shikiPlugin({
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    }),
  ],
  theme,
  port: 8888,
  alias: {
    "@": path.resolve(__dirname, "../src"),
    "@components": path.resolve(__dirname, "components"),
  },
});
