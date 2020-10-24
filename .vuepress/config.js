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
  },
  plugins: {
    sitemap: {
      hostname: 'https://www.zoe.icu'
    },
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github',
      // all other options of Vssue are allowed
      owner: 'zoe-icu',
      repo: 'document',
      clientId: '60ea738d0460599e806e',
      clientSecret: '8b81ef57637b95b32d15fe27c31d5574347ce54f',
    },
  },
}