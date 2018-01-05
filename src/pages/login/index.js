import React from 'react'
import { Button } from 'antd'

export default class extends React.Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>用户名：{ user.name}</div>
        <Button type='primary'>登录</Button>
      </div>
    )
  }
}
