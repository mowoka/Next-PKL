import Container from '@components/Container'
import Layout from '@components/Layout'
import PostAuthor from '@components/PostAuthor'
import PostMetaTitle from '@components/PostMetaTitle'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NewsImage from '../utils/NewsImage'
import Link from 'next/link'

const Detail = () => {
  const router = useRouter()

  if (Object.keys(router.query).length < 1) {
    return (
      <React.Fragment>
        <Layout>
        <Head>
        <title>404 Not Found</title>
        <meta name='description' content='news not found' />
      </Head>
          <Container>
            <div className="text-center text-white py-20">
              <h2 className="text-6xl">No result 😥</h2>
              <p className="text-2xl mt-4 md:w-6/12 w-full mx-auto">
                We couldn’t find any news with keyword Please try back <br />
                <Link href={'/'}>
                  <a className="hover:underline">to home.</a>
                </Link>
              </p>
            </div>
          </Container>
        </Layout>
      </React.Fragment>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Detail &mdash; News</title>
        <meta name='description' content='news detail content' />
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex justify-center flex-col items-center">
          <PostMetaTitle
            category={`${router.query.category}`}
            published_at={`${router.query.published_at}`}
            title={`${router.query.title}`}
            center
          />
          <PostAuthor
            author={`${router.query.author}`}
            source={`${router.query.source}`}
            // avatar={Avatar1}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <NewsImage
            src={
              `${router.query?.image}` ||
              'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
            }
            alt="post_1"
            width={'140px'}
            height="100px"
            layout="responsive"
            className="rounded-xl"
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-xl text-white mb-4">
            {`${router.query.description}`}
          </p>
          <p className="text-xl text-white mb-4">
            see full new here:{' '}
            <a
              href={`${router.query.url}`}
              target="_blank"
              className="hover:underline cursor-pointer"
            >{`${router.query.url}`}</a>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default Detail
