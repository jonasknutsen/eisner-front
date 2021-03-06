import React from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ReadableDate from '../components/ReadableDate'
import Category from '../components/Category'
import PostContent from '../components/PostContent'
import Facts from '../components/Facts'
import Categories from '../components/Categories'

function BlogPost ({ posts }) {
  const post = posts[0]
  return (
    <article className='post'>
      <Head>
        <title>{post.title.rendered} - tegneseriebloggen.no</title>
        <link rel='canonical' href={`https://tegneseriebloggen.no/${post.slug}`} />
        <meta name='description' content={post.excerpt.rendered.replace('<p>', '').replace(posts[0].excerpt.rendered.substring(posts[0].excerpt.rendered.indexOf('<a '), posts[0].excerpt.rendered.length - 1), '').substring(0, 250)} />
      </Head>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div className='post-published'>Publisert <ReadableDate rawDate={posts[0].date} /> i <Category cat={posts[0].categories} /></div>
      <PostContent content={posts[0].content.rendered} />
      {post.acf.tittel && <Facts acf={posts[0].acf} />}
      {post.acf.category && <Categories category={posts[0].acf.category} />}
      <style jsx>{`
        .post {
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem;
        }
        h1 {
          margin-bottom: 1rem;
        }
        .post-published {
          font-style: italic;
        }
    `}</style>
    </article>
  )
}

export async function getStaticPaths () {
  const res = await fetch('https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/posts?per_page=100')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/posts?slug=${params.slug}`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

BlogPost.propTypes = {
  posts: PropTypes.array
}

export default BlogPost
