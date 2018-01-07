import MovieList from '../containers/Movie/List'
import MovieDetail from '../containers/Movie/Detail'

export default [
  { path: '/movie/in_theaters',
    type: 'MOVIE_IN_THEATERS',
    name: '电影-正在热映',
    component: MovieList
  },
  { path: '/movie/coming_soon',
    type: 'MOVIE_COMINT_SOON',
    name: '电影-即将上映',
    component: MovieList
  },
  { path: '/movie/us_box',
    type: 'MOVIE_US_BOX',
    name: '北美票房榜',
    component: MovieList
  },
  { path: '/movie/detail/:id',
    type: 'MOVIE_DETAIL',
    name: '电影-详情',
    component: MovieDetail
  }
]
