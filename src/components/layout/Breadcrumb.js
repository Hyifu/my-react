import React from 'react'
import { Breadcrumb } from 'antd'

export default class extends React.Component {
  render () {
    return (
      <Breadcrumb style={{ paddingBottom: '16px' }}>
        <Breadcrumb.Item>主页</Breadcrumb.Item>
        <Breadcrumb.Item>一级菜单</Breadcrumb.Item>
        <Breadcrumb.Item>二级菜单</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
