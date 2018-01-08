import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MODULES from './modules'

import { Layout } from 'antd'
import Header from './containers/Layout/Header'
import Sider from './containers/Layout/Sider'
import Breadcrumb from './containers/Layout/Breadcrumb'
import Footer from './containers/Layout/Footer'

// 负责 Layout 的呈现控制，但不干预其数据
export default class extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          <Header />
          <Layout>
            <Sider />
            <Layout style={{ padding: '16px' }}>
              <Breadcrumb />
              <Layout.Content style={{ background: '#fff', padding: '16px', borderRadius: '5px' }}>
                <Switch>
                  { MODULES.map(route => (
                    <Route
                      // 如果 exact 为 false。`/not-match` 也将激活首页导航的 activeClass
                      exact={route.exact}
                      key={route.type}
                      path={route.path}
                      render={() => <route.component basePath={route.path} />}
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
