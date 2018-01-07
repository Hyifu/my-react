import React from 'react'
import logo from '../../assets/logo.svg'
import { Layout, Menu } from 'antd'

export default class extends React.Component {
  render () {
    return (
      <Layout.Header className='header'>
        <a href='/' style={{ height: '48px', float: 'left', marginTop: '8px', lineHeight: 1 }}>
          <img src={logo} height='48' alt='logo' />
        </a>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>首页</Menu.Item>
          <Menu.Item key='2'>邮件中心</Menu.Item>
          <Menu.Item key='3'>我的博客</Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}
