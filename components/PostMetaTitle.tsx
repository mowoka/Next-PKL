import React from 'react'
import Link from 'next/link'
import { formatDate } from '../utils/dateConverter'

interface PostMetaTitleProps {
  category: string
  published_at: string
  title: string
  center?: boolean
}

const PostMetaTitle = (props: PostMetaTitleProps) => {
  const { category, published_at, title, center } = props
  return (
    <React.Fragment>
      <div className="flex font-primary items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{formatDate(published_at)}</div>
      </div>

      <h2 className={`text-2xl text-white mt-5 ${center ? 'text-center' : ''}`}>
        {title}
      </h2>
    </React.Fragment>
  )
}

export default PostMetaTitle
