import React from 'react'
import Layout from '@components/Layout'
import CardPost from '@components/CardPost'
import Container from '@components/Container'
import ActionHeader from '@components/ActionHeader'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { newFetch } from 'core/clients/newsFetch'
import { newsData } from '../index'

interface PostProps {
  intialData: newsData[]
  title: string
  category: string
}

const Posts = (props: PostProps) => {
  const { intialData, title, category } = props

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
      </Head>
      <Container>
        <ActionHeader>{title}</ActionHeader>
        {intialData.length ? (
          <div className="flex -mx-4 flex-wrap mt-6">
            {intialData.map((data, index) => (
              <div className="md:w-4/12 w-full px-4 py-6" key={index}>
                <CardPost data={data} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-2xl mt-4 md:w-6/12 w-full mx-auto">
              We couldn’t find any news with category {category}. Please try
              another category.
            </p>
          </div>
        )}
      </Container>
    </Layout>
  )
}

const category = [
  'science',
  'business',
  'sports',
  'technology',
  'entertainment',
  'health',
]

export async function getStaticPaths() {
  const paths = category.map((cat) => {
    return {
      params: { category: cat },
    }
  })
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const notFound = !category.includes(params?.category as string)
  let intialData: newsData[] = []
  const title = `news on category ${params?.category}`
  try {
    const res = await newFetch<newsData[]>(
      `news?countries=au&categories=${params?.category}&access_key=${process.env.API_KEY}`,
    )
    const { body } = res
    intialData = body.data
  } catch (error) {
    console.log(error)
    intialData = []
  }

  return {
    props: {
      intialData,
      title,
      category,
    },
    notFound,
    revalidate: 60,
  }
}

export default Posts
