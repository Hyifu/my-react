import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
  render () {
    return (
      <div>
        <h1>首页</h1>
        <div><Link to='/movie/latest'>最新电影</Link></div>
        <div><Link to='/movie'>电影首页</Link></div>
      </div>
    )
  }
}
