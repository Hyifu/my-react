import React from 'react'
import logo from '../../assets/logo.svg'
import { Layout, Menu } from 'antd'

export default class extends React.Component {
  state = {
    selectedKeys: ['']
  }

  componentDidMount () {
    this.onSelect(this.props.location.pathname)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location !== this.props.location) {
      this.onSelect(nextProps.location.pathname)
    }
  }

  onSelect = pathname => {
    this.setState({ selectedKeys: ['/' + pathname.split('/')[1]] })
  }

  render () {
    if (!this.props.visible) {
      return null
    }
    return (
      <Layout.Header className='header'>
        <a href='/' style={{ height: '48px', float: 'left', marginTop: '8px', lineHeight: 1 }}>
          <img src={logo} height='48' alt='logo' />
        </a>
        <Menu
          theme='dark'
          mode='horizontal'
          style={{ lineHeight: '64px' }}
          selectedKeys={this.state.selectedKeys}
          onSelect={event => this.props.history.push(event.key)}
        >
          <Menu.Item key='/'>首页</Menu.Item>
          <Menu.Item key='/movie'>电影</Menu.Item>
          <Menu.Item key='/book'>读书</Menu.Item>
          <Menu.Item key='/music'>音乐</Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}
