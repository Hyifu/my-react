import React from 'react'
import logo from './assets/logo.svg'
import { Button } from 'antd'

export default class App extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <header>
          <img src={logo} style={{ width: '200px' }} alt='logo' />
          <h1>Welcome to React</h1>
        </header>
        <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
        <Button type='primary'>Start</Button>
      </div>
    )
  }
}
