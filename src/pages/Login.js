import React from 'react'
import { Button } from 'antd'

export default class extends React.Component {
  onLogin = () => {
    this.props.onAuth()
  }

  render () {
    return (
      <div>
        <div>用户名：匿名</div>
        <Button
          type='primary'
          onClick={this.onLogin}
          loading={this.props.isFetching}
        >
          登录
        </Button>
      </div>
    )
  }
}
