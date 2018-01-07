import React from 'react'
import { Button } from 'antd'

export default class extends React.Component {
  onLogin = () => {
    this.props.onLogin()
  }

  render () {
    return (
      <div>
        <div>用户名：{ this.props.user }</div>
        <Button type='primary' onClick={this.onLogin}>登录</Button>
      </div>
    )
  }
}
