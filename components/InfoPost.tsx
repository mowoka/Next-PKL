import React from 'react'
import PostMetaTitle from './PostMetaTitle'
import PostAuthor from './PostAuthor'
import { newsData } from '../pages/index'
import Link from 'next/link'

interface InforPostProps {
  data: newsData
}

const InfoPost = (props: InforPostProps) => {
  const { data } = props

  const generateURlParams = (tempData: any) => {
    const params = new URLSearchParams()
    for (let key in tempData) {
      params.append(key, tempData[key])
    }

    return params
  }

  return (
    <React.Fragment>
      <PostMetaTitle
        category={data.category}
        published_at={data.published_at}
        title={data.title}
      />
      <p className="text-white/60 font-primary mt-5 w-10/12">
        {data.description}
      </p>
      <PostAuthor
        // avatar={avatar}
        author={data.author}
        source={data.source}
      />
      <div className="w-full mt-4">
        <Link
          href={{
            pathname: '/detail',
            query: {
              ...data,
            },
          }}
        >
          <a className="text-white/60 hover:underline">See detail</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default InfoPost
