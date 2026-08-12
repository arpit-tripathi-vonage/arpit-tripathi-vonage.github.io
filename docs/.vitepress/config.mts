import { defineConfig } from 'vitepress'

const topNavbar = [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      // { text: 'Sections', items: [  
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'API Examples', link: '/api-examples' }
      // ]},
      { text: 'References', link: '/references' }
    ]

const optionalSidebar = [
    { 
        collapsed: false,
        text: 'Home',
        items: [
          { text: 'AI for dev', link: '/ai' },
        ], 
      },
      { 
        collapsed: true,
        text: 'Backend',
        items: [
          { text: 'Java', link: '/backend/java' },
        ], 
      },
      { 
        collapsed: true,
        text: 'Frontend',
        items: [
          { text: 'CSS', link: '/frontend/css' },
          { text: 'TypeScript', link: '/frontend/typescript' },
          { text: 'Vue', link: '/frontend/vue' },
        ], 
      },
    ]

const mainSidebar = [
      { text: 'Overview', link: '/overview' },
      { text: "O'reilly", link: '/oreilly' },
      { text: 'AI for developers', link: '/ai/' },
      {
        collapsed: false, 
        text: 'Backend',
        items: [
          { text: 'Spring Framework', link: '/backend/spring/' },
          { text: 'Java', link: '/backend/java/' }
        ],
      },
      {
        collapsed: true, 
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ],
      },
      {
        collapsed: true, 
        text: 'Interview Focus',
        items: [
          { text: 'Landscape', link: '/interview' },
          { text: 'DSA', link: '/dsa/' },
          { text: 'LLD', link: '/lld/' },
          { text: 'System Design (HLD)', link: '/system-design/' },
          { text: 'System Design Plan', link: '/system-design/plan' },
        ],
      },
    ]

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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
