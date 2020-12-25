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
        text: "HappyBoot",
        link: "/develop/",
      },
      {
        text: "ElementUI",
        link: "https://element.eleme.cn/#/zh-CN",
      },
      {
        text: "ElementPlus",
        link: "https://element-plus.org/#/zh-CN",
      },
      {
        text: "MandMobile",
        link: "https://didi.github.io/mand-mobile/#/zh-CN/home",
      },
      {
        text: "Vue3",
        link: "https://www.vue3js.cn/",
      },
      {
        text: "EchartsGallery",
        link: "https://www.makeapie.com/explore.html",
      },
      {
        text: "Echarts",
        link: "https://echarts.apache.org/zh/index.html",
      },
      {
        text: "Remixicon",
        link: "https://remixicon.com/",
      },
      {
        text: "Sass",
        link: "https://www.sass.hk/docs/",
      },
      {
        text: "NPM",
        link: "https://www.npmjs.com/",
      },
      {
        text: "Drone",
        link: "https://www.drone.io/",
      }
    ],
    sidebar: [
      '/web/',
      '/develop/',
      '/specification/',
      '/tools/',
      '/happyboot-next/',
      // '/javascript/',
      // '/typescript/',
      // '/node-sass/'
    ]
  }
}
