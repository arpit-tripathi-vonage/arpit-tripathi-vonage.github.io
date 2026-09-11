import { defineConfig } from "vitepress";

const topNavbar = [
  { text: "Home", link: "/" },
  { text: "Overview", link: "/overview" },
  { text: "O'reilly", link: "/oreilly" },
  { text: "To Do", link: "/todo" },
];

const mainSidebar = [
  { text: "Overview", link: "/overview" },
  { text: "O'reilly", link: "/oreilly" },
  { text: "To Do", link: "/todo" },
  {
    collapsed: false,
    text: "Work Experience",
    items: [
      { text: "Work Exp", link: "/exp/" },
      { text: "Overview of 5 years", link: "/exp/overview" },
      { text: "Behavioral Principles (amazon)", link: "/exp/amazon-leadership-principles" },
      { text: "What is STAR Method", link: "/exp/star-method" },
      { text: "My STAR Stories", link: "/exp/star-stories" },
      { text: "Key Items I think", link: "/exp/key-items" },
      { text: "Feedbacks", link: "/exp/feedbacks" },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notebook",
  description: "notes for reference",
  base: "/",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: topNavbar,

    sidebar: mainSidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
