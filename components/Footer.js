import React from 'react'
import Link from 'next/link'

const year = new Date().getFullYear()

const Footer = () => (
  <footer>
    <div className='footer-boxes'>
      <div className='categories'>
        <ul>
          <li><Link href='/s/blogg'><a>Blogg</a></Link></li>
          <li><Link href='/s/nye-norske-utgivelser'><a>Nye norske utgivelser</a></Link></li>
          <li><Link href='/s/eldre-norske-utgivelser'><a>Eldre norske utgivelser</a></Link></li>
          <li><Link href='/s/utenlandske-utgivelser'><a>Utenlandske utgivelser</a></Link></li>
        </ul>
      </div>
      <div className='pages'>
        <ul>
          <li><Link href='/k/om-tegneseriebloggen-no'><a>Om tegneseriebloggen.no</a></Link></li>
          <li><Link href='/k/kontakt-tegneseriebloggen-no'><a>Kontakt tegneseriebloggen.no</a></Link></li>
          <li><a href='https://www.twitter.com/tegneserieblogg'>tegneseriebloggen.no på Twitter</a></li>
          <li><a href='https://www.instagram.com/tegneseriebloggen/'>tegneseriebloggen.no på Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className='copyright'>&copy; tegneseriebloggen.no 2015 - {year}</div>
    <style jsx>{`
      footer {
        text-align: center;
      }
      ul {
        
      }
      li {
        list-style: none;
        
      }
      .footer-boxes {
        display: flex;
        justify-content: space-around;
      }
      .copyright {
        letter-spacing: .1rem;
        font-weight: 500;
      }
  `}</style>
  </footer>
)

export default Footer
