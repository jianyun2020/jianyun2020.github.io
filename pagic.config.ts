export default {
    srcDir: '',
    theme: 'blog',
    plugins: ['blog'],
    title: 'jianyuns\'Blog',
    description: '欢迎来到我的博客',
    root: '/blog/',
    blog: {
        root: '/posts/',
        social: {
            github: 'jianyun2020',
            email: 'sujianyun2020@163.com',
        }
    },
    nav: [
        {
          text: '首页',
          link: '/index.html',
          icon: 'czs-home-l',
        },
        {
          text: '分类',
          link: '/categories/index.html',
          icon: 'czs-category-l',
        },
        {
          text: '标签',
          link: '/tags/index.html',
          icon: 'czs-tag-l',
        },
        {
          text: '关于',
          link: '/about/index.html',
          icon: 'czs-about-l',
        },
        {
          text: '归档',
          link: '/archives/index.html',
          icon: 'czs-box-l',
        },
      ],
};