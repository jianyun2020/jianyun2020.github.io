export default {
    srcDir: 'src',
    theme: 'blog',
    plugins: ['blog'],
    title: 'jianyuns\'Blog',
    description: '此博客主要用来记录一些学习笔记，方便以后复查。',
    head: React.createElement("link", { rel: "icon", type: "image/png", href: "/favicon.png" }),
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
