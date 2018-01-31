import React from 'react'
import Error from '../components/Error'

export default class extends React.Component {
  render () {
    return (
      <Error title='404' desc='抱歉，你访问的页面不存在' />
    )
  }
}
