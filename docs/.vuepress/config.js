module.exports = {
  title: 'HappyKit',
  description: 'v1.0',
  // head: [
  //   ['link', { rel: 'icon', href: '/vuejs.png' }]
  // ],
  markdown:{
    lineNumbers:true
  },
  themeConfig: {
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
