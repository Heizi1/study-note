import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "HeiziYa 的学习笔记",
  description: "一个 VitePress 建立的知识库",

  // 站点将部署到的 base URL。如果计划在子路径例如 GitHub 页面下部署站点，则需要设置此项。如果计划将站点部署到 https://foo.github.io/bar/，那么应该将 base 设置为 '/bar/'。它应该始终以 / 开头和结尾。
  base: '/study-note/',

  // 网页地址栏 icon
  head: [["link", { rel: "icon", href: "/study-note/logo.svg" }]],

  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    // 页面右上角跳转
    nav: [
      { text: 'Home', link: '/' },
      { text: '后端', link: '/markdown-examples' }
    ],

    // 左侧导航栏
    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'PostgreSQL', link: '/docs/PostgreSQL/基础' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '运维',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // github的跳转链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  
    // 左上角logo
    logo: {
      light: '/logo.png',
      dark: '/logo-dark.png',
      alt: '/logo.png'
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // 页脚内容
    footer: {
      copyright: "Copyright@ 2025 HeiziYa"
    }
  }
})
