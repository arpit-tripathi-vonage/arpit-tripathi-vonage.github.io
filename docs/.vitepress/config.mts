import { defineConfig } from 'vitepress'

const topNavbar = [
      { text: 'Home', link: '/' },
      { text: 'Sections', items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' }
      ]},
      { text: 'References', link: '/references' }
    ]

const mainSidebar = [
      { text: 'Overview', link: '/overview' },
      { 
        text: 'Home',
        items: [
          { text: 'AI for dev', link: '/ai' }
        ],
        collapsed: false, 
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
