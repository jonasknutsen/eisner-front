import React from 'react'
import PropTypes from 'prop-types'

class ReadableDateCategory extends React.Component {
  render () {
    const { rawDate } = this.props
    return (
      <span>
        {this.convertDate({ rawDate })}
      </span>
    )
  }

  convertDate (rawDate) {
    var firstPart = rawDate.rawDate.split(' ')

    var d = firstPart[0].split('-')
    var months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
    return d[2] + '. ' + months[d[1].replace('0', '')] + ' ' + d[0]
  }
}

ReadableDateCategory.propTypes = {
  rawDate: PropTypes.string
}

export default ReadableDateCategory
