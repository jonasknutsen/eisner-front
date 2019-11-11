import React from 'react'
import Link from 'next/link'
import Tegneseriebloggen from './Tegneseriebloggen'

const Header = () => (
  <header>
    <Link href='/'><a><Tegneseriebloggen /></a></Link>
    <style jsx>{`
      header {
        width: 98%;
        max-width: 1000px;
        margin: .2rem auto 0 auto;
      }
    `}</style>
  </header>
)

export default Header
