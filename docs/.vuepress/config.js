module.exports = {
    title: 'xhtml-ui', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    port: 1234, //端口
    base:'/xhtmldocs/',
    themeConfig: { //主题配置
        nav: [{
                text: '主页',
                link: '/'
            }, // 导航条
        ],
        // 为以下路由添加侧边栏 
        sidebar: {
            '/components/': [
                {
                    "title": "开发指南",
                    collapsable: false,
                    children: [
                        { title: '快速上手', path:'introduction/fast'}
                    ]
                },
                {
                    "title": "组件",
                    collapsable: false,
                    children: [
                        { title: 'button', path:'button'},
                        { title: 'icon', path:'icon'},
                        { title: 'status-bar', path:'statusbar'}
                        //...
                        // 每加一个菜单需要在这里也新增一下
                    ]
                }
            ]
        }
    }
}
