import { defineConfig } from "vitepress";

const topNavbar = [
  { text: "Home", link: "/" },
  { text: "Overview", link: "/overview" },
  // { text: 'Sections', items: [
  //     { text: 'Markdown Examples', link: '/markdown-examples' },
  //     { text: 'API Examples', link: '/api-examples' }
  // ]},
  { text: "References", link: "/references" },
];

const mainSidebar = [
  { text: "Overview", link: "/overview" },
  { text: "O'reilly", link: "/oreilly" },
  { text: "AI for developers", link: "/ai/" },
  {
    collapsed: false,
    text: "Backend",
    items: [
      { text: "Spring Framework", link: "/backend/spring/" },
      { text: "Java", link: "/backend/java/" },
    ],
  },
  {
    collapsed: true,
    text: "Frontend",
    items: [
      { text: "CSS", link: "/frontend/css" },
      { text: "TypeScript", link: "/frontend/typescript" },
      { text: "Vue", link: "/frontend/vue" },
    ],
  },
  {
    collapsed: true,
    text: "Interview Focus",
    items: [
      { text: "Landscape", link: "/interview" },
      { text: "DSA", link: "/dsa/" },
      { text: "LLD", link: "/lld/" },
      { text: "Concurrency Interview", link: "/concurrency/" },
    ],
  },
  {
    text: "System Design (HLD)",
    collapsed: true,
    items: [
      { text: "HLD Study Plan", link: "/system-design/plan" },
      { text: "HLD Overview", link: "/system-design/" },
      {
        collapsed: true,
        text: "Fundamentals (Theory)",
        items: [],
      },
      {
        collapsed: true,
        text: "Interview",
        items: [],
      },
      //
    ],
  },
  {
    collapsed: true,
    text: "Examples",
    items: [
      { text: "Markdown Examples", link: "/examples/markdown-examples" },
      { text: "Runtime API Examples", link: "/examples/api-examples" },
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
