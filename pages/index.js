import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
  render = () => {
    const { posts } = this.props
    console.log(posts)
    return (
      <div>
        {posts.map((post, key) => {
          return (
            <div key={key}>{post.title.rendered}</div>
          )
        })}
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
