import React from 'react'
import { Layout, Menu } from 'antd'

export default class extends React.Component {
  render () {
    return (
      <Layout.Sider width={200}>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key='1'>功能A</Menu.Item>
          <Menu.Item key='2'>功能B</Menu.Item>
          <Menu.Item key='3'>功能C</Menu.Item>
        </Menu>
      </Layout.Sider>
    )
  }
}
