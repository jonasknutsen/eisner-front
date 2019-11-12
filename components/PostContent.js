import React from 'react'
import PropTypes from 'prop-types'

class PostContent extends React.Component {
  render () {
    const { content } = this.props
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} className='post-content' />
        <style jsx global>{`
          .post-content > div {
            max-width: 100% !important;
          }
          .post-image {
            max-width: 100%;
            height: auto;
          }
          figure.wp-block-image {
            max-width: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
          }
          figure.wp-block-image {
            text-align: center;
          }
          .wp-block-image > img {
            max-width: 100%;
            margin: 0 auto;
          }
          p.wp-caption-text {
            margin-top: 0;
            font-style: italic;
          }
          .aligncenter {
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}

PostContent.propTypes = {
  content: PropTypes.string
}

export default PostContent
