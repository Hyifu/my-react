import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { onLayout } from '../../actions/index'

class LayoutControler extends React.Component {
  render () {
    // header => 头部 & sider => 侧边导航 & footer => 底部版权 & bread => 面包屑导航
    const { onLayout, location } = this.props
    if (location.pathname === '/') {
      onLayout('sider', false)
    } else {
      onLayout('sider', true)
    }
    return null
  }
}

const mapDispatchToProps = {
  onLayout
}

export default withRouter(connect(null, mapDispatchToProps)(LayoutControler))
