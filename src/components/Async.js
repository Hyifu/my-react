import React from 'react'

export default function (importComponent) {
  return class extends React.Component {
    state = {
      component: null
    }

    async componentDidMount () {
      const { default: component } = await importComponent()
      this.setState({ component })
    }

    render () {
      const Component = this.state.component
      return (
        Component ? <Component {...this.props} /> : <Loading />
      )
    }
  }
}

// 组件加载提示
const Loading = () => (
  <div style={{
    fontSize: '13px',
    color: '#999',
    textAlign: 'center',
    lineHeight: '48px'
  }}>
    加载组件中...
  </div>
)
