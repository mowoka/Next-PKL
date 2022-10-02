import React from 'react'
import FeaturedPost from '../components/FeaturedPost'
import CardPost from '@components/CardPost'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Head from 'next/head'
import { newFetch } from 'core/clients/newsFetch'
import { GetStaticProps } from 'next'

export interface newsData {
  author: string
  title: string
  description: string
  url: string
  source: string
  image: string
  category: string
  language: string
  country: string
  published_at: string
}

interface HomeProps {
  mainFeature: newsData
  data: newsData[]
}

const Home = (props: HomeProps) => {
  const { mainFeature, data } = props
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Home &mdash; News</title>
          <meta name="description" content="Home news on deman trending" />
        </Head>
        <Container>
          <FeaturedPost data={mainFeature} />
          <div className="flex -mx-4 flex-wrap mt-6">
            {data?.map((post, index) => (
              <div className="md:w-4/12 w-full px-4 py-6" key={index}>
                <CardPost data={post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let FeaturePost = {}
  let dataPosts: newsData[] = []

  const res = await newFetch<newsData[]>(
    `news?countries=au&categories=general&access_key=${process.env.API_KEY}`,
  )

  const { body } = res
  if (res.status === 200) {
    FeaturePost = body.data[0]
    dataPosts = body.data.slice(1)
  }

  return {
    props: {
      mainFeature: FeaturePost,
      data: dataPosts,
    },
    revalidate: 60,
  }
}

export default Home
