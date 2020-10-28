import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PostContent from '../../components/PostContent'
import PostBoxSimple from '../../components/PostBoxSimple'

function BlogPage ({ pages }) {
  const page = pages[0]
  return (
    <article className='page'>
      <Head>
        <title>{page.title.rendered}</title>
      </Head>
      <section className='page-header'>
        <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
        <PostContent content={page.content.rendered} />
      </section>
      {page.acf.posts && <section className='latest-articles'>
        {page.acf.posts.map((post, key) => {
          return (
            <PostBoxSimple post={post} key={key} />
          )
        })}
      </section>}
      <style jsx>{`
        .page {
          max-width: 1000px;
          margin: 0 auto;
        }
        .page-header {
          padding: 0 1%;
        }
        .latest-articles {
          display: flex;
          flex-wrap: wrap;
        }
        h1 {
          margin-bottom: 1rem;
        }
        .category-article {
          width: 100%
        }
        @media (min-width: 768px) {
          .category-article {
            margin: 1%;
            width: 48%;
          }
        }
      `}</style>
    </article>
  )
}

export async function getStaticPaths () {
  const res = await fetch('https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/pages')
  const pages = await res.json()

  const paths = pages.map((page) => ({
    params: { slug: page.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/pages?slug=${params.slug}`)
  const pages = await res.json()

  return {
    props: {
      pages
    }
  }
}

BlogPage.propTypes = {
  pages: PropTypes.array
}

export default BlogPage
