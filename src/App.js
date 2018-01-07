import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import Header from './containers/Layout/Header'
import Sider from './containers/Layout/Sider'
import Breadcrumb from './containers/Layout/Breadcrumb'
import Login from './containers/Login'

// 负责 Layout 的呈现控制，但不干预其数据
class App extends React.Component {
  render () {
    const { header, sider, footer, bread } = this.props.layout
    return (
      <Layout style={{ height: '100vh' }}>
        { header && <Header /> }
        <Layout>
          { sider && <Sider /> }
          <Layout style={{ padding: '16px' }}>
            { bread && <Breadcrumb /> }
            <Layout.Content style={{ background: '#fff', padding: '16px', borderRadius: '5px' }}>
              <Login />
            </Layout.Content>
            { footer && <Layout.Footer style={{ textAlign: 'center', padding: '10px 0 0' }}>copyright @ 2017 Hyifu</Layout.Footer> }
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default connect(state => ({ layout: state.app.layout }))(App)
