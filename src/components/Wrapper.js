import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

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
        <Redirect from={basePath} to={basePath + ROUTES[0].path} />
      </Switch>
    )
  }
}
