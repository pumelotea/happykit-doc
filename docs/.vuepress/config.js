module.exports = {
  title: 'HappyKit',
  description: 'v1.1.0',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: ['@vuepress/plugin-nprogress','@vuepress/plugin-back-to-top'],
  themeConfig: {
    lastUpdated: '最后一次修改',
    logo: '/logo.png',
    sidebarDepth:3,
    nav: [
      {
        text: "快速上手",
        link: "/quick/",
      },
      {
        text: "使用手册",
        link: "/guide/",
      },
      {
        text: "接口",
        link: "/api/",
      },
      {
        text: "生态",
        items: [
          { text: 'ElementPlus', link: "/happyboot-element/" },
          { text: 'AntDesign', link: "/happyboot-ant/" },
          { text: 'HappyBootApi', link: "/happyboot-api/" },
        ]
      },
      {
        text: "Q/A",
        link: "/qa/",
      },
      {
        text: "附录",
        link: "/additional/",
      },
      {
        text: "Github",
        link: "https://github.com/pumelotea/happykit.git",
      }
    ],
    sidebar: [
      '/quick/',
      '/guide/',
      '/api/',
      '/qa/',
      '/additional/'
    ]

  },
}
