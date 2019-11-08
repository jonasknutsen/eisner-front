import React from 'react'
import Link from 'next/link'

const year = new Date().getFullYear()

const Footer = () => (
  <footer>
    <div className='copyright'>&copy; tegneseriebloggen.no 2015 - {year}</div>
    <style jsx>{`
      footer {
        text-align: center;
      }
      .copyright {
        letter-spacing: .1rem;
        font-weight: 500;
      }
  `}</style>
  </footer>
)

export default Footer
