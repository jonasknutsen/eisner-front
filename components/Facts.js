import React from 'react'
import PropTypes from 'prop-types'

class Facts extends React.Component {
  render () {
    const { acf } = this.props
    return (
      <div className='post-facts'>
        <h2>Fakta om &laquo;{acf.tittel}&raquo;</h2>
        <p>Serie/figur: <em>{acf['serie/figur']}</em></p>
        <p>Tittel: <em>{acf.tittel}</em></p>
        <p>Forfatter: <em>{acf.forfatter}</em></p>
        <p>Tegner: <em>{acf.tegner}</em></p>
        <p>Utgiver: <em>{acf.utgiver}</em></p>
        <p>År: <em>{acf.år}</em></p>
        <p>Pris: <em>{acf.pris}</em></p>
        <style jsx>{`
          .post-facts {
            border: 1px solid #D92525;
            padding: 1rem;
          }
          h2 {
            margin-bottom: 1rem;
          }
          p {
            margin: 0;
          }
        `}
        </style>
      </div>
    )
  }
}

Facts.propTypes = {
  acf: PropTypes.object
}

export default Facts
