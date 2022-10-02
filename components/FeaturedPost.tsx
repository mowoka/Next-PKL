import React from 'react'
import Post1 from 'assets/img/post-1.png'
import Avatar1 from 'assets/img/avatar-1.png'
import InfoPost from './InfoPost'
import { newsData } from '../pages/index'
import NewsImage from '../utils/NewsImage'
import { formatDate } from '../utils/dateConverter'

interface FeaturedPostProps {
  data: newsData
}

const FeaturedPost = (props: FeaturedPostProps) => {
  const { data } = props
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full mb-4">
          <NewsImage
            src={data?.image || Post1}
            alt="post_1"
            width={'240px'}
            height="140px"
            layout="responsive"
            className="rounded-xl"
          />
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost data={data} />
        </div>
      </div>
      <hr className="border-white/60 mt-10 md:hidden" />
    </article>
  )
}

export default FeaturedPost
