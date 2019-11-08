import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header>
    <Link href='/'><a>Tegneseriebloggen</a></Link>
    <style jsx>{`
      header {

      }
      @media (max-width: 550px) {
        .logo {
          height: 2rem;
        }
      }
    `}</style>
  </header>
)

export default Header
