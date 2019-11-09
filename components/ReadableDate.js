import React from 'react'
import PropTypes from 'prop-types'

class ReadableDate extends React.Component {
  render () {
    const { rawDate } = this.props
    return (
      <span>
        {this.convertDate({ rawDate })}
      </span>
    )
  }

  convertDate (rawDate) {
    var d = new Date(rawDate.rawDate)
    var months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
    return d.getDate() + '. ' + months[d.getMonth()] + ' ' + d.getFullYear()
  }
}

ReadableDate.propTypes = {
  rawDate: PropTypes.string
}
export default ReadableDate
