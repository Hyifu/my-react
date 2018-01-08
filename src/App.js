import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd'
import Header from './containers/Layout/Header'
import Sider from './containers/Layout/Sider'
import Breadcrumb from './containers/Layout/Breadcrumb'
import MODULES from './modules'

// 负责 Layout 的呈现控制，但不干预其数据
class App extends React.Component {
  render () {
    const { header, sider, footer, bread } = this.props.layout
    return (
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          { header && <Header /> }
          <Layout>
            { sider && <Sider /> }
            <Layout style={{ padding: '16px' }}>
              { bread && <Breadcrumb /> }
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
              { footer && <Layout.Footer style={{ textAlign: 'center', padding: '10px 0 0' }}>copyright @ 2017 Hyifu</Layout.Footer> }
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default connect(state => ({ layout: state.app.layout }))(App)
