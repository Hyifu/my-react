import React from 'react'
import Switcher from '../../containers/Switcher'
import MovieLatest from '../../containers/Movie/Latest'
import MovieList from '../../containers/Movie/List'
import MovieDetail from '../../containers/Movie/Detail'

export default class extends React.Component {
  ROUTES = [
    { path: '/latest',
      type: 'MOVIE_LATEST',
      name: '电影-最新',
      component: MovieLatest
    },
    { path: '/list/:type',
      type: 'MOVIE_LIST',
      name: '电影-列表',
      component: MovieList
    },
    { path: '/detail/:id',
      type: 'MOVIE_DETAIL',
      name: '电影-详情',
      component: MovieDetail
    }
  ]

  render () {
    return (
      <Switcher
        basePath={this.props.basePath}
        ROUTES={this.ROUTES}
      />
    )
  }
}
