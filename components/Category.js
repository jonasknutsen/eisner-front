import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

class Category extends React.Component {
  render () {
    const { cat } = this.props
    return (
      <span>
        {this.convertCategory({ cat })}
      </span>
    )
  }

  convertCategory (cat) {
    const categories = [
      { id: 1, name: 'Blogg', slug: 'blogg' },
      { id: 39, name: 'Nye norske utgivelser', slug: 'nye-norske-utgivelser' },
      { id: 40, name: 'Utenlandske utgivelser', slug: 'utenlandske-utgivelser' },
      { id: 41, name: 'Eldre norske utgivelser', slug: 'eldre-norske-utgivelser' }
    ]
    return cat.cat.map((c) => {
      return categories.map((category, key) => {
        if (category.id === c) {
          return (
            <Link key={key} href='/s/[slug]' as={`/s/${category.slug}`}><a>{category.name}</a></Link>
          )
        }
      })
    })
  }
}

Category.propTypes = {
  cat: PropTypes.any
}

export default Category
