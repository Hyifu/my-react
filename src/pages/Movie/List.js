import React from 'react'
import { List, Card } from 'antd'

export default class extends React.Component {
  componentDidMount () {
    this.props.onMovieList({ url: 'top250' })
  }

  render () {
    const { isFetching, list } = this.props.movieList
    return (
      <List
        grid={{ column: 4, gutter: 18 }}
        header={<h2>豆瓣电影 250</h2>}
        loading={isFetching && false}
        dataSource={list}
        split={false}
        pagination={{ current: 1, pageSize: 20, total: 32 }}
        renderItem={item => (
          <List.Item style={{ border: 0 }}>
            <Card
              hoverable
              loading={!item.tittle}
            >
              <div>
                { item.tittle && (
                  <h4>{ item.tittle }</h4>
                ) }
              </div>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}
