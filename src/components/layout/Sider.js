import React from 'react'
import { Layout, Menu, Icon } from 'antd'

export default class extends React.Component {
  state = {
    selectedKeys: ['']
  }

  componentDidMount () {
    this.setState({ selectedKeys: [this.props.location.pathname] })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ selectedKeys: [nextProps.location.pathname] })
    }
  }

  render () {
    const type = '/' + this.props.location.pathname.split('/')[1]
    const NAV = this.props.siderRoutes[type]
    // 如果本模块下无侧边导航或被设置为隐藏
    if (!this.props.visible || !NAV) {
      return null
    }
    //
    const createMenu = navs => {
      const defaultOpenKeys = []
      const createMenuItems = nav => (
        nav.map(nav => {
          if (nav.subMenu) {
            defaultOpenKeys.push(nav.key)
            return (
              <Menu.SubMenu
                key='charts'
                title={
                  <div>
                    <Icon type='appstore' />
                    <span>榜单</span>
                  </div>
                }
              >
                { createMenuItems(nav.subMenu) }
              </Menu.SubMenu>
            )
          } else {
            return (
              <Menu.Item key={nav.key}>
                <Icon type={nav.icon} />
                <span>{nav.name}</span>
              </Menu.Item>
            )
          }
        })
      )
      //
      return (
        <Menu
          mode='inline'
          selectedKeys={this.state.selectedKeys}
          style={{ height: '100%', border: 0 }}
          defaultOpenKeys={defaultOpenKeys}
          onSelect={event => this.props.history.push(event.key)}
        >
          { createMenuItems(navs) }
        </Menu>
      )
    }
    //
    return (
      <Layout.Sider width={200}>
        { createMenu(NAV) }
      </Layout.Sider>
    )
  }
}
