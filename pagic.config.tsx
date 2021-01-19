export default {
    srcDir: 'src',
    theme: 'blog',
    plugins: ['blog'],
    title: 'jianyuns\'Blog',
    description: '欢迎来到我的博客',
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
          link: '/',
          icon: 'czs-home-l',
        },
        {
          text: '分类',
          link: '/categories/',
          icon: 'czs-category-l',
        },
        {
          text: '标签',
          link: '/tags/',
          icon: 'czs-tag-l',
        },
        {
          text: '关于',
          link: '/about/',
          icon: 'czs-about-l',
        },
        {
          text: '归档',
          link: '/archives/',
          icon: 'czs-box-l',
        },
      ],
};