import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class Categories extends React.Component {
  render () {
    const { category } = this.props
    return (
      <nav className='post-categories'>
        <strong>Postet under:</strong>
        <ul>
          {category.map((cat, index) => (
            <li key={index} className='category-name'><Link href='/k/[slug]' as={`/k/${cat.post_name}`}><a>{cat.post_title}</a></Link></li>
          ))}
        </ul>
        <style jsx>{`
          .post-categories {
            display: flex;
            margin-top: 1rem;
          }
          ul {
            display: flex;
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
            margin-left: 1rem;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
        </style>
      </nav>
    )
  }
}

Categories.propTypes = {
  category: PropTypes.array
}

export default Categories
