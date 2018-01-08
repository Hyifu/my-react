import React from 'react'
import { Layout } from 'antd'

export default class extends React.Component {
  render () {
    if (!this.props.visible) {
      return null
    }
    return (
      <Layout.Footer
        style={{ textAlign: 'center', padding: '10px 0 0' }}
      >
        copyright @ 2017 Hyifu
      </Layout.Footer>
    )
  }
}
