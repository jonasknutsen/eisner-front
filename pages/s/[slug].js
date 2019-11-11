import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { getCategory } from '../../utils/categoryMagic'
import PostBox from '../../components/PostBox'

class Category extends React.Component {
  render = () => {
    const { content, category } = this.props
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
}

Category.getInitialProps = async function ({ query }) {
  const { slug } = query
  const category = getCategory(slug)
  const res = await fetch('https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/posts?categories=' + category.id + '&per_page=100')
  const data = await res.json()
  return {
    content: data,
    category
  }
}

Category.propTypes = {
  category: PropTypes.any,
  content: PropTypes.object
}

export default Category
