// 头部导航
export const headerRoutes = [
  { key: '/',
    name: '首页'
  },
  { key: '/movie',
    isModule: true, // 如果是模块，则可能需要对此路由进行重定向
    name: '电影'
  },
  { key: '/book',
    isModule: true,
    name: '读书'
  },
  { key: '/music',
    isModule: true,
    name: '音乐'
  },
  { key: '/coming_soon',
    isModule: false,
    name: '即将推出'
  }
]

// 以模块作为侧边导航的区分
export const siderRoutes = {
  '/movie': [
    { key: '/movie/latest',
      icon: 'appstore',
      name: '正在上映'
    },
    { key: '/movie/list/coming_soon',
      icon: 'appstore',
      name: '即将上映'
    },
    { key: 'charts',
      icon: 'appstore',
      name: '榜单',
      subMenu: [
        { key: '/movie/list/top250',
          icon: 'appstore',
          name: 'Top250'
        },
        { key: '/movie/list/weekly',
          icon: 'appstore',
          name: '口碑榜'
        },
        { key: '/movie/list/us_box',
          icon: 'appstore',
          name: '北美票房榜'
        },
        { key: '/movie/list/new_movies',
          icon: 'appstore',
          name: '新片榜'
        }
      ]
    }
  ],
  '/book': [
    { key: '/book/latest',
      icon: 'appstore',
      name: '最近新书'
    }
  ],
  '/music': [
    { key: '/music/latest',
      icon: 'appstore',
      name: '新歌速递'
    }
  ]
}

export const authorizedRoutes = ['/', '/login', '/music', '/movie', '/movie/list/new_movies', '/movie/list/top250']
