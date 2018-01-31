import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import styles from './styles.css'

export default class extends React.Component {
  render () {
    const { title, desc } = this.props
    return (
      <div className={styles.wrapper}>
        <div className={styles[`bg_${title}`] + ' ' + styles.background} />
        <div>
          <h2 className={styles.title}>{ title }</h2>
          <div className={styles.desc}>{ desc }</div>
          <Link to='/'>
            <Button type='primary'>返回首页</Button>
          </Link>
        </div>
      </div>
    )
  }
}
