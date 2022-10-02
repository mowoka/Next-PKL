import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface PostAuthorProps {
  avatar?: StaticImageData
  author: string
  source: string
}

const PostAuthor = (props: PostAuthorProps) => {
  const { avatar, author, source } = props
  return (
    <div className="flex items-center mt-5">
      {/* <Image
      src={avatar}
      alt="avatar"
      height={'60px'}
      width={'60px'}
      className="rounded-full object-cover"
    /> */}
      <div className="">
        <h3 className="text-white">{author === '' ? 'Annonymous' : author}</h3>
        <div className="text-white/60 text-sm mt-1">{source}</div>
      </div>
    </div>
  )
}

export default PostAuthor
