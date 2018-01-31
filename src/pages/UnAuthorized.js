import React from 'react'
import Error from '../components/Error'

export default class extends React.Component {
  render () {
    return (
      <Error title='403' desc='抱歉，你无权访问该页面' />
    )
  }
}
