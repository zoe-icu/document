module.exports = {
  title: 'Zoe Blog', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '博客',
        link: '/docs/',
      },
    ],
    directories: [
      {
        id: 'docs',
        dirname: 'docs',
        path: '/',
      },
    ],
    smoothScroll: true
  }
}