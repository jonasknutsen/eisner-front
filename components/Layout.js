import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className='wrapper'>
    <Header />
    <main className='site-content' role='main'>
      {props.children}
    </main>
    <Footer />
    <style jsx global>{`
      html {
        height: 100%;
        padding: 0;
        margin: 0;
      }
      body {
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
      }
      #__next {
        height: 100%;
      }
      .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      main {
        flex: 1;
      }
  `}</style>
  </div>
)

export default Layout
