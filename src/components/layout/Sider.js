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
    if (!this.props.visible) {
      return null
    }
    return (
      <Layout.Sider width={200}>
        <Menu
          mode='inline'
          selectedKeys={this.state.selectedKeys}
          style={{ height: '100%', border: 0 }}
          defaultOpenKeys={['charts']}
          onSelect={event => this.props.history.push(event.key)}
        >
          <Menu.Item key='/movie/latest'>
            <Icon type='appstore' />
            <span>正在上映</span>
          </Menu.Item>
          <Menu.Item key='/movie/list/coming_soon'>
            <Icon type='appstore' />
            <span>即将上映</span>
          </Menu.Item>
          <Menu.SubMenu
            key='charts'
            title={
              <div>
                <Icon type='appstore' />
                <span>榜单</span>
              </div>
            }
          >
            <Menu.Item key='/movie/list/top250'>
              <Icon type='appstore' />
              <span>Top250</span>
            </Menu.Item>
            <Menu.Item key='/movie/list/weekly'>
              <Icon type='appstore' />
              <span>口碑榜</span>
            </Menu.Item>
            <Menu.Item key='/movie/list/us_box'>
              <Icon type='appstore' />
              <span>北美票房榜</span>
            </Menu.Item>
            <Menu.Item key='/movie/list/new_movies'>
              <Icon type='appstore' />
              <span>新片榜</span>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
    )
  }
}
