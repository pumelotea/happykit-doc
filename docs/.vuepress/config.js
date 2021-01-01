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
    ],
    sidebar: [
      '/guide/',
      '/api/',
      '/additional/'
    ]
  }
}
