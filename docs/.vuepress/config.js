module.exports = {
  title: 'HappyKit',
  description: 'v1.0',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown:{
    lineNumbers:true
  },
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    lastUpdated: '最后一次修改',
    logo: '/logo.png',
    sidebarDepth:3,
    nav: [
      {
        text: "Github",
        link: "https://github.com/pumelotea/happykit.git",
      },
      {
        text: "HappyBootElement",
        link: "https://github.com/pumelotea/happyboot-element.git",
      },
    ],
    sidebar: [
      '/guide/',
      '/api/',
      '/happyboot-element/',
      '/additional/'
    ]
  }
}
