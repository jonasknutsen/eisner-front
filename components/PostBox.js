import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import ReadableDate from './ReadableDate'

class PostBox extends React.Component {
  render = () => {
    const { post } = this.props
    return (
      <div className='post-box-wrapper'>
        <Link href={post.slug}><a>
          <div className='post-box'>
            <div className='post-box-hero' style={{ backgroundImage: `url(${post.acf.stort_bilde ? post.acf.stort_bilde.url : '/img/tegneseriebloggen-default.png'})` }} />
            <div className='post-box-content'>
              <div className='post-box-title'><h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></div>
              <div className='post-box-date'>Publisert <ReadableDate rawDate={post.date} /></div>
              <div className='post-box-excerpt'>{post.excerpt.rendered.replace('<p>', '').replace(post.excerpt.rendered.substring(post.excerpt.rendered.indexOf('<a '), post.excerpt.rendered.length - 1), '').substring(0, 250)} ...</div>
              <div className='post-box-read-more'>Les mer om <span className='post-box-read-more-title' dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></div>
            </div>
          </div>
        </a></Link>
        <style jsx>{`
          .post-box {

          }
          .post-box:hover {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
          }
          .post-box-hero {
            background-color: red;
            height: 13.4375rem;
            background-size: cover;
            background-position: center;
          }
          .post-box-content {
            margin-top: .5rem;
            padding: .2rem;
          }
          .post-box-title {
            margin-bottom: .2rem;
          }
          .post-box-title:hover {
            text-decoration: underline;
          }
          .post-box-excerpt {
            color: #000;
          }
          .post-box-date {
            font-style: italic;
            color: #595959;
          }
          .post-box-read-more:hover {
            text-decoration: underline;
          }
          .post-box-read-more-title {
            font-style: italic;
          }
          @media (min-width: 768px) {
          .post-box-wrapper {
            margin: 1%;
            width: 480px;
          }
        }
      `}</style>
      </div>
    )
  }
}

PostBox.propTypes = {
  post: PropTypes.object
}

export default PostBox
