import { sidebar as createSidebar } from "vuepress-theme-hope";

export const sidebar = createSidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
