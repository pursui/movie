export default {
    path: '/movie',
    component: () =>
        import ('@/views/movie'),
    children: [{
            path: 'city',
            component: () =>
                import ('@/components/city')
        },
        {
            path: 'nowPlaying',
            component: () =>
                import ('@/components/nowPlaying')
        },
        {
            path: 'comingsoon',
            component: () =>
                import ('@/components/comingsoon')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/search')
        },
        {
            // 自己设置路由名字
            path: 'detail/1/:movieId',
            components: {
                // 默认情况是哪个页面的
                default: () =>
                    import ('@/components/nowPlaying'),
                //需要展示的页面位置 
                detail: () =>
                    import ('@/views/movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'

        }
    ]
}