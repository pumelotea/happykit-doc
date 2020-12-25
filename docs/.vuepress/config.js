module.exports = {
  title: 'VueDocs',
  description: 'v1.0',
  head: [
    ['link', { rel: 'icon', href: '/vuejs.png' }]
  ],
  markdown:{
    lineNumbers:true
  },

  themeConfig: {
    logo: '/vuejs.png',
    sidebarDepth:3,
    nav: [
      {
        text: "happykit",
        link: "/happykit/",
      },
    ],
    sidebar: [
      '/happykit/',
    ]
  }
}
