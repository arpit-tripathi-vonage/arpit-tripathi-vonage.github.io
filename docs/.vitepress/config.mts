import { defineConfig } from 'vitepress'

const topNavbar = [
      { text: 'Home', link: '/' },
      { text: 'Home2', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notebook",
  description: "notes for reference",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: topNavbar,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
