module.exports = [
  {text: '首页', link: '/'},
  {
    text: '分类',
    link: 'category',
    items: [
      {
        text: '考研笔记',
        items: [
          {text: '英语', link: '/category/8143cc480faf9a11/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
          {text: '数学', link: '/category/802a1ca6f7b71c59/'},
        ]
      },
      {
        text: '技术笔记',
        items: [
          {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
          {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'},
          {text: '《ES6 教程》笔记', link: '/note/es6/'},
          {text: '《Vue》笔记', link: '/note/vue/'},
          {text: '《如何用Go实现Web应用中为服务》', link: '/note/typescript-axios/'},
          {text: '小程序笔记', link: '/note/wx-miniprogram/'},
        ]
      }
    ]
  }
]
