import React from 'react'
import { Link } from 'react-router-dom'
import Loadable from 'react-loadable'

export default function (importComponent) {
  const LoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
      return <div style={loadStyle}>组件加载中...</div>
    } else if (error) {
      return <div style={loadStyle}>组件加载失败，请 <a onClick={window.location.reload}>刷新重试</a> 或 <Link to='/'>返回首页</Link></div>
    } else {
      return null
    }
  }

  return Loadable({
    loader: importComponent,
    loading: LoadingComponent,
    timeout: 5000 // 5 秒超时处理
  })
}

const loadStyle = {
  fontSize: '13px',
  color: '#999',
  textAlign: 'center',
  lineHeight: '48px'
}
