import React from 'react'
import { Row, Col, Card } from 'antd'

export default class extends React.Component {
  render () {
    const Placeholder = () => <Card loading title='占位卡片' style={{ width: '100%', marginBottom: '16px' }} >NULL</Card>
    return (
      <div style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', padding: '100px' }}>
          <img width='422' height='193' src='https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg' alt='首页图' />
          <h1 style={{ marginTop: '20px' }}>MY-REACT</h1>
        </div>
        <Row gutter={16}>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
          <Col span={6}><Placeholder /></Col>
        </Row>
      </div>
    )
  }
}
