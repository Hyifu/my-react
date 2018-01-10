import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { onLayout } from '../../actions/index'

// 本组件主要负责监听路由，实现不同路由展示不同 layout
// header => 头部 & sider => 侧边导航 & footer => 底部版权 & bread => 面包屑导航
class LayoutControler extends React.Component {
  state = {
    defaultFlag: true // 如果当前是默认 layout 布局，则标记为 true
  }

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
    { path: /^\/$/, // 正则匹配表达式
      hideParts: 'sider,bread' // 在对应 path 需要隐藏的 layout 组件名，以逗号分隔
    }
    // { path: /\/music/,
    //   hideParts: 'sider,bread'
    // },
    // { path: /\/movie\/list/,
    //   hideParts: 'bread'
    // },
    // { path: /\/movie\/latest/,
    //   hideParts: 'footer'
    // }
  ]

  onChange = props => {
    const { location, onLayout } = props
    if (!this.state.defaultFlag) {
      this.setState({ defaultFlag: true })
      onLayout(null)
    }
    //
    this.configs.forEach(config => {
      if (config.path.test(location.pathname)) {
        console.log(location.pathname)
        this.setState({ defaultFlag: false })
        onLayout(config.hideParts)
      }
    })
  }

  render () {
    return null
  }
}

export default withRouter(connect(null, { onLayout })(LayoutControler))
