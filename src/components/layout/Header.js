import React from 'react'
import logo from '../../assets/logo.svg'
import { Layout, Menu } from 'antd'
import { headerRoutes } from '../../routes'

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
        <a href='/' title='首页' style={{ height: '48px', float: 'left', marginTop: '8px', lineHeight: 1 }}>
          <img src={logo} height='48' alt='logo' />
        </a>
        <Menu
          theme='dark'
          mode='horizontal'
          style={{ lineHeight: '64px' }}
          selectedKeys={this.state.selectedKeys}
          onSelect={event => this.props.history.push(event.key)}
        >
          { this.props.headerRoutes.map(nav => <Menu.Item key={nav.key}>{ nav.name }</Menu.Item>) }
        </Menu>
      </Layout.Header>
    )
  }
}
