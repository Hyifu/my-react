import React from 'react'
import logo from './assets/logo.svg'
import Login from './containers/Login'

export default class extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <header>
          <img src={logo} style={{ width: '200px' }} alt='logo' />
        </header>
        <div>
          <Login />
        </div>
      </div>
    )
  }
}
