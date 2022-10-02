import React from 'react'
import InfoPost from './InfoPost'
import { newsData } from '../pages/index'
import NewsImage from '../utils/NewsImage'

interface CardPostProps {
  data: newsData
}

const CardPost = (props: CardPostProps) => {
  const { data } = props
  return (
    <article>
      <div className="w-full rounded mb-4">
        <NewsImage
          src={
            data?.image ||
            'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
          }
          alt="post_1"
          width={'140px'}
          height="100px"
          layout="responsive"
          className="rounded-xl"
        />
      </div>
      <InfoPost data={data} />
    </article>
  )
}

export default CardPost
