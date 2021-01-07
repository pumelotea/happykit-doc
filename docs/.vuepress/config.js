module.exports = {
  title: 'HappyKit',
  description: 'v1.0.6',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: ['@vuepress/plugin-nprogress','@vuepress/plugin-back-to-top'],
  themeConfig: {
    lastUpdated: '最后一次修改',
    logo: '/logo.png',
    subSidebar: 'auto',
    sidebarDepth:3,
    noFoundPageByTencent: false,
    nav: [
      {
        text: "文档",
        link: "/guide/",
      },
      {
        text: "接口",
        link: "/api/",
      },
      {
        text: "生态",
        items: [
          { text: 'Admin for ElementPlus', link: "/happyboot-element/" },
          { text: 'Admin for AntDesign', link: "/happyboot-ant/" },
          { text: 'SpringBoot for HappyBoot', link: "/happyboot-springboot/" },
        ]
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
      '/guide/',
      '/api/',
      '/additional/'
    ]

  },
}
