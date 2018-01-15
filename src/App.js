import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MODULES from './modules'
import Switcher from './containers/Switcher'

// 引入 Controler 控制路由与 Layout 布局的匹配
import LayoutControler from './containers/Layout'

import { Layout } from 'antd'
import Header from './containers/Layout/Header'
import Sider from './containers/Layout/Sider'
import Breadcrumb from './containers/Layout/Breadcrumb'
import Footer from './containers/Layout/Footer'

export default class extends React.Component {
  componentDidMount () {
    // 移除加载提示
    const spinner = document.getElementById('index-spinner')
    spinner.style.opacity = '0'
    setTimeout(() => {
      spinner.parentElement.removeChild(spinner)
    }, 500)
  }

  render () {
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
                <Switcher basePath='' ROUTES={MODULES} />
              </Layout.Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
