import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MODULES from './modules'

// 引入 LayoutControler 控制路由与 Layout 的匹配
import LayoutControler from './containers/Layout'

import { Layout } from 'antd'
import Header from './containers/Layout/Header'
import Sider from './containers/Layout/Sider'
import Breadcrumb from './containers/Layout/Breadcrumb'
import Footer from './containers/Layout/Footer'

export default class extends React.Component {
  render () {
    const unAuthorized = false // 判断页面授权情况
    const unLogin = false // 判断登录情况
    return (
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          <LayoutControler />
          <Header />
          <Layout>
            <Sider />
            <Layout style={{ padding: '12px' }}>
              <Breadcrumb />
              <Layout.Content style={{ background: '#fff', padding: '16px', borderRadius: '5px' }}>
                <Switch>
                  { MODULES.map(route => (
                    <Route
                      // 如果 exact 为 false。`/not-match` 也将激活首页导航的 activeClass
                      exact={route.exact}
                      key={route.type}
                      path={route.path}
                      render={() => {
                        // 当未登录时
                        if (unLogin && route.path !== '/login') {
                          return <Redirect to={{ pathname: '/login' }} />
                        }
                        // 当未授权时
                        if (unAuthorized && route.path !== '/401') {
                          return <Redirect to={{ pathname: '/401' }} />
                        }
                        return <route.component basePath={route.path} />
                      }}
                    />
                  )) }
                </Switch>
              </Layout.Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
