import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PostBox from '../components/PostBox'

class Index extends React.Component {
  render = () => {
    const { posts } = this.props
    return (
      <div className='posts'>
        <Head>
          <title>Tegneseriebloggen - Om den niende kunstart</title>
          <meta name='description' content='En ujevt oppdatert blogg om tegneserier. Både norske og utenlandkse utgivelser, gamle og nye. Og andre tegneserierelatretne emner.' />
        </Head>
        {posts.map((post, key) => {
          return (
            <PostBox post={post} key={key} />
          )
        })}
        <style jsx>{`
          .posts {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }  
        `}</style>
      </div>
    )
  }
}

Index.propTypes = {
  posts: PropTypes.array
}

Index.getInitialProps = async function () {
  const res = await fetch('https://goscinny.tegneseriebloggen.no/wp-json/wp/v2/posts')
  const data = await res.json()

  return {
    posts: data
  }
}

export default Index
