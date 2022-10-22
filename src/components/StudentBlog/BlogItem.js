import React from 'react'
import './BlogItem.sass'
import { Link } from 'react-router-dom'
export default function BlogItem(props) {
  const date = props.data.date.split('-')
  const textLength = 300
  return (
    <div className="BlogItem">
      <div className="date">
        <h1 style={{ fontSize: '52px' }}>{date[0]}</h1>
        <h5>{date[1]}</h5>
      </div>
      <div className="content">
        <h1>{props.data.title}</h1>
        <h5 style={{ alignSelf: 'flex-end' }}>- {props.data.author}</h5>
        <p>{props.data.blog.slice(0, textLength)}</p>
        <Link to={`/blog/${props.data.id}`}>See more ..</Link>
      </div>
    </div>
  )
}
