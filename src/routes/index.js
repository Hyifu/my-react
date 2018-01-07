import Home from '../containers/Home'
import Login from '../containers/Login'
import NotFound from '../pages/NotFound'
//
import movieRoutes from './movie'

export default [
  ...movieRoutes,
  { path: '/',
    exact: true,
    type: 'HOME',
    name: '首页',
    component: Home
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
  { path: '/*',
    type: '404',
    component: NotFound
  }
]
