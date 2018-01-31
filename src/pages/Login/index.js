import React from 'react'
import { Button, Input, Icon, Divider, Avatar } from 'antd'
import styles from './styles.css'

export default class extends React.Component {
  onLogin = () => {
    this.props.onAuth()
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h2 style={{ textAlign: 'center' }}>登录</h2>
          <div>
            <Input
              size='large'
              placeholder='请输入用户名'
              style={{ marginBottom: '24px' }}
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Input
              size='large'
              placeholder='请输入密码'
              style={{ marginBottom: '24px' }}
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Button
              size='large'
              type='primary'
              style={{ width: '100%' }}
            >
              登录
            </Button>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Divider>
              <span style={{ color: '#999' }}>OA 登录</span>
            </Divider>
            <a onClick={this.onLogin}>
              <Avatar title='OA 授权登录' size='large' icon='user' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
