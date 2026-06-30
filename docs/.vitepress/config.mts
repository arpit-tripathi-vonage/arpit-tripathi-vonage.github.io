import { defineConfig } from 'vitepress'

const topNavbar = [
      { text: 'Home', link: '/' },
      { text: 'Sections', items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' }
      ]},
      { text: 'Examples', link: '/markdown-examples' }
    ]

const mainSidebar = [
      { 
        text: 'Home',
        items: [
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: true, 
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: true, 
      },
    ]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notebook",
  description: "notes for reference",
  base: "/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: topNavbar,

    sidebar: mainSidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
