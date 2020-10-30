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
        margin: .2rem auto .3rem auto;
      }
      @media (min-width: 768px) {
        header {
          margin-bottom: 0;
        }
    `}
    </style>
  </header>
)

export default Header
