import React from 'react'
import Link from 'next/link'
import Tegneseriebloggen from './Tegneseriebloggen'

const Header = () => (
  <header>
    <Link href='/'><a><Tegneseriebloggen /></a></Link>
    <style jsx>{`
      header {
        max-height: 2rem;
        margin: .2rem 0; 
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
