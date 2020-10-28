import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PropTypes from 'prop-types'
import PostBox from '../../components/PostBox'

const categories = [
  { id: 1, name: 'Blogg', slug: 'blogg' },
  { id: 39, name: 'Nye norske utgivelser', slug: 'nye-norske-utgivelser' },
  { id: 40, name: 'Utenlandske utgivelser', slug: 'utenlandske-utgivelser' },
  { id: 41, name: 'Eldre norske utgivelser', slug: 'eldre-norske-utgivelser' }
]

function CategoryPage ({ content, category }) {
  console.log('category', category)
  return (
    <article className='category'>
      <Head>
        <title>{category.name} - tegneseriebloggen.no</title>
      </Head>
      <section className='page-header'>
        <h1>{category.name}</h1>
      </section>
      {content && <section className='posts'>
        {content.map((post, key) => {
          return (
            <PostBox post={post} key={key} />
          )
        })}
      </section>}
      <style jsx>{`
        h1 {
          margin-bottom: 1rem;
        }
        .page-header {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1%;
        }
        .posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }  
      `}</style>
    </article>
  )
}

export async function getStaticPaths () {
  const paths = categories.map((category) => ({
    params: { slug: category.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const category = categories.find(cat => cat.slug === params.slug)
  const res = await fetch(`https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/posts?categories=${category.id}&per_page=100`)
  const content = await res.json()

  return {
    props: {
      content,
      category
    }
  }
}

CategoryPage.propTypes = {
  category: PropTypes.any,
  content: PropTypes.object
}

export default CategoryPage
