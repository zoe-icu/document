
const nav = require('./config/nav.js');
module.exports = {
  title: "Zoe's blog", // Title for the site. This will be displayed in the navbar.
  description: 'JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,java,mysql,golang等技术文章。', // todo 修改 描述,以 <meta> 标签渲染到页面html中
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  ['meta', { name: 'keywords', content: 'JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,java,mysql,golang等技术文章。' }],
  // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],// 百度统计的站点拥有者验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },
  theme: 'vdoing',
  themeConfig: {
    nav,
    sidebar: 'structuring', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    sidebarDepth: 2,
    logo: '/img/logo.png', // 导航栏logo
    repo: 'zoe-icu/document', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新',
    docsDir: 'docs', // 编辑的文件夹
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'zoe', // 必需
      link: 'https://github.com/zoe-icu' // 可选的
    },
    blogger: { // 博主信息，显示在首页侧边栏
      avatar: '/img/avatar.svg',
      name: 'Zoe Zheng',
      slogan: '不可以三分钟热度'
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:i@zoe.icu'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/zoe-icu'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: 'Zoe Zheng | <a href="https://github.com/zoe-icu/document/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    }
  },

  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: '60ea738d0460599e806e',
          clientSecret: '8b81ef57637b95b32d15fe27c31d5574347ce54f',
          repo: 'document',
          owner: 'zoe-icu',
          admin: ['zoe-icu'], // 对仓库有写权限的人
          distractionFreeMode: false,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- document.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body:"<%- document.title %>：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY-MM-DD H:MM:SS');
        }
      }
    ]
  ]
}
