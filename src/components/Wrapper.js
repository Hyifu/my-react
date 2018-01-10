import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../pages/NotFound'

export default class extends React.Component {
  render () {
    const { basePath, ROUTES } = this.props
    return (
      <Switch>
        { ROUTES.map(route => (
          <Route
            // 如果 exact 为 false。`/not-match` 也将激活首页导航的 activeClass
            exact={route.exact}
            key={route.type}
            path={basePath + route.path}
            render={props => <route.component />}
          />
        )) }
        <Route component={NotFound} />
      </Switch>
    )
  }
}
