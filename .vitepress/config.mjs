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

    // 文章目录显示层级
    outline: {
      level: 'deep'
    },

    // https://vitepress.dev/reference/default-theme-config
    // 页面右上角跳转
    nav: [
      { text: 'Home', link: '/' },
      { text: 'IDEA', link: '/docs/idea/IDEA相关' },
      { text: '后端', link: '/docs/PostgreSQL/01-基础' },
      { text: '前端', link: '/docs/web/01-使用NVM安装Node' },
      { text: '运维', link: '/docs/DevOps/Linux/01-安装虚拟机' }
    ],

    // 左侧导航栏
    sidebar: [
      {
        text: 'IDEA',
        items: [
          { text: 'IDEA相关', link: '/docs/idea/01-IDEA相关' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: '使用NVM安装Node', link: '/docs/web/01-使用NVM安装Node' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'PostgreSQL', link: '/docs/PostgreSQL/01-基础' },
        ]
      },
      {
        text: '运维',
        items: [
          {
            text: 'Linux',
            items: [
                { text: '安装虚拟机', link: '/docs/DevOps/Linux/01-安装虚拟机' },
            ]
          },
        ]
      },
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
