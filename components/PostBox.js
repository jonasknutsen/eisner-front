import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import LazyLoad from 'react-lazyload';
import ReadableDate from './ReadableDate'

class PostBox extends React.Component {
  render = () => {
    const { post } = this.props
    return (
      <div className='post-box-wrapper'>
        <Link href='/[slug]' as={`/${post.slug}`}><a>
          <div className='post-box'>
            <div className='post-box-hero'>
              <LazyLoad height={215} offset={100}>
                <img src={post.acf.stort_bilde ? post.acf.stort_bilde.url : '/img/tegneseriebloggen-default.png'} />
              </LazyLoad>
            </div>
            <div className='post-box-content'>
              <div className='post-box-title'><h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></div>
              <div className='post-box-date'>Publisert <ReadableDate rawDate={post.date} /></div>
              <div className='post-box-excerpt'>{post.excerpt.rendered.replace('<p>', '').replace(post.excerpt.rendered.substring(post.excerpt.rendered.indexOf('<a '), post.excerpt.rendered.length - 1), '').substring(0, 250)} ...</div>
              <div className='post-box-read-more'>Les mer om <span className='post-box-read-more-title' dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></div>
            </div>
          </div>
        </a></Link>
        <div className='post-divider' />
        <style jsx>{`
          .post-box {
            width: 100%;
          }
          .post-box:hover {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
          }
          .post-box-hero {
            margin: 0;
            max-height: 99%;
            line-height: 0;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            margin: 0;
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
          @media (max-width: 1000px) {
            .post-box-wrapper {
              margin-bottom: 1rem;
            }
            .post-divider {
              border-bottom: 1px solid #DB0220;
              width: 75%;
              margin: 1rem auto 0 auto;
            }
            .post-box-content {
              padding: .5rem;
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
