import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { onLayout } from '../../actions/index'

// 本组件主要负责监听路由，实现不同路由展示不同 layout
// header => 头部 & sider => 侧边导航 & footer => 底部版权 & bread => 面包屑导航
class LayoutControler extends React.Component {
  componentDidMount () {
    this.onChange(this.props)
  }

  componentWillReceiveProps (nextProps) {
    // 避免路由不变而 props 更新导致的死循环
    if (nextProps.location !== this.props.location) {
      this.onChange(nextProps)
    }
  }

  configs = [
    { path: '/',
      hideParts: 'sider,footer' // 在对应 path 需要隐藏的 layout 组件名，以逗号分隔
    },
    { path: '/music',
      hideParts: 'sider,bread'
    }
  ]

  onChange = props => {
    const { location, onLayout } = props
    let defaultFlag = true // 如果当前是默认 layout 布局，则标记为 true
    //
    this.configs.forEach(config => {
      if (location.pathname === config.path) {
        defaultFlag = false
        onLayout(config.hideParts)
      }
    })
    if (!defaultFlag) {
      defaultFlag = true
      onLayout(null)
    }
  }

  render () {
    return null
  }
}

export default withRouter(connect(null, { onLayout })(LayoutControler))
