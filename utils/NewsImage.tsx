import Image, { ImageLoader, ImageProps } from 'next/image'

const newsImageLoader: ImageLoader = ({ src }) => {
  // Do nothing. This Image component is used to load
  // static image without server processing
  return `${src}`
}

const NewsImage = (props: ImageProps) => {
  const { alt, ...resProps } = props
  return <Image loader={newsImageLoader} unoptimized alt={alt} {...resProps} />
}

export default NewsImage
