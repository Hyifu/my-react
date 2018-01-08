import React from 'react'
import { Layout, Menu } from 'antd'

export default class extends React.Component {
  render () {
    if (!this.props.visible) {
      return null
    }
    return (
      <Layout.Sider width={200}>
        <Menu
          mode='inline'
          selectedKeys={['in_theaters']}
          style={{ height: '100%', border: 0 }}
        >
          <Menu.Item key='in_theaters'>正在热映</Menu.Item>
          <Menu.Item key='coming_soon'>即将上映</Menu.Item>
          <Menu.Item key='top250'>Top250</Menu.Item>
          <Menu.Item key='weekly'>口碑榜</Menu.Item>
          <Menu.Item key='us_box'>北美票房榜</Menu.Item>
          <Menu.Item key='new_movies'>新片榜</Menu.Item>
        </Menu>
      </Layout.Sider>
    )
  }
}
