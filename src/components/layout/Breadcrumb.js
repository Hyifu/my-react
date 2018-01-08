import React from 'react'
import { Breadcrumb } from 'antd'

export default class extends React.Component {
  render () {
    if (!this.props.visible) {
      return null
    }
    return (
      <Breadcrumb style={{ paddingBottom: '16px' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>电影</Breadcrumb.Item>
        <Breadcrumb.Item>正在热映</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
