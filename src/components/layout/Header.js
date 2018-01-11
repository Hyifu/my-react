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
    const { visible, history, headerRoutes } = this.props
    // 如果本模块下被设置为隐藏或权限列表未获取
    if (!visible || !headerRoutes) {
      return null
    }
    return (
      <Layout.Header className='header'>
        <a href='/' title='首页' style={{ height: '48px', float: 'left', marginTop: '8px', lineHeight: 1 }}>
          <img src={logo} height='48' alt='logo' />
        </a>
        <Menu
          theme='dark'
          mode='horizontal'
          style={{ lineHeight: '64px' }}
          selectedKeys={this.state.selectedKeys}
          onSelect={event => history.push(event.key)}
        >
          { headerRoutes.map(nav => <Menu.Item key={nav.key}>{ nav.name }</Menu.Item>) }
        </Menu>
      </Layout.Header>
    )
  }
}
