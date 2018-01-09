import asyncComponent from './components/Async'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './pages/NotFound'

// 电影模块
const AsyncMovie = asyncComponent(() => import('./pages/Movie'))

export default [
  { path: '/',
    exact: true,
    type: 'HOME',
    component: Home
  },
  { path: '/movie',
    type: 'MOVIE',
    component: AsyncMovie
  },
  { path: '/book',
    type: 'BOOK',
    component: NotFound
  },
  { path: '/music',
    type: 'MUSIC',
    component: NotFound
  },
  { path: '/login',
    type: 'LOGIN',
    component: Login
  },
  { path: '/403',
    type: '403',
    component: NotFound
  },
  { path: '*',
    type: '404',
    component: NotFound
  }
]
