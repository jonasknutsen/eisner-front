import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Head from 'next/head'
import PostContent from '../../components/PostContent'
import ReadableDateCategory from '../../components/ReadableDateCategory'

class Page extends React.Component {
  render = () => {
    const { content } = this.props
    console.log(content)
    const page = content[0]
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
          {page.acf.posts.map((post, i) => (
            <div key={post.ID} className='category-article'>
              <h2 className='category-article-title'>
                <Link href={`/${post.post_name}`}>
                  <a>{post.post_title}</a>
                </Link>
              </h2>
              <div className='category-article-text'>
                <p className='category-article-date'>Publisert <ReadableDateCategory rawDate={post.post_date} /></p>
                <p><span dangerouslySetInnerHTML={{ __html: post.post_content.substring(0, 250) }} /> ...</p>
                <Link href={`/${post.post_name}`}><a>Les mer</a></Link>
              </div>
            </div>
          ))}
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
}

Page.getInitialProps = async function ({ query }) {
  const { slug } = query
  console.log(slug)
  const res = await fetch('https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/pages?slug=' + slug)
  const data = await res.json()
  console.log(data)
  return {
    content: data
  }
}

Page.propTypes = {
  content: PropTypes.array
}

export default Page
