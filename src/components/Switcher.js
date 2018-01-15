import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import UnAuthorized from '../pages/UnAuthorized'
import NotFound from '../pages/NotFound'

// 本组件作为嵌套路由组件，提供路由解析渲染和重定向等
export default class extends React.Component {
  render () {
    const { location, basePath, ROUTES, authorizedRoutes } = this.props
    return (
      <Switch>
        { ROUTES.map(route => (
          <Route
            // 如果 exact 为 false。`/not-match` 也将激活首页导航的 activeClass
            exact={route.exact}
            key={route.type}
            path={basePath + route.path}
            render={() => {
              // 当未登录时
              if (!authorizedRoutes && route.path !== '/login') {
                return <Redirect to='/login' />
              }
              // 当未授权时，在本页面内展示 401
              if (authorizedRoutes && !authorizedRoutes.includes(location.pathname) && route.path !== '/401') {
                return <Route component={UnAuthorized} />
              }
              return <route.component basePath={route.path} />
            }}
          />
        )) }
        <Route component={NotFound} />
      </Switch>
    )
  }
}
