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
          selectedKeys={['movie']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='home'>首页</Menu.Item>
          <Menu.Item key='movie'>电影</Menu.Item>
          <Menu.Item key='book'>读书</Menu.Item>
          <Menu.Item key='music'>音乐</Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}
