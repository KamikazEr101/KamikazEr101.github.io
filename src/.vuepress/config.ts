import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ivory的博客",
      description: "Ivory的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
