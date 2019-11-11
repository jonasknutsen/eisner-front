import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import { initGA, logPageView } from '../utils/analytics'

class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render = () => {
    const { children } = this.props
    return (
      <div className='wrapper'>
        <Header />
        <main className='site-content' role='main'>
          {children}
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
          h1, h2, h3, h4 {
            letter-spacing: 1px;
            font-weight: 500;
            margin: 0;
          }
          h1 {
            font-size: 3em;
            line-height: 1.05em;
          }
          h2 {
            font-size:2.25em;
            line-height: 1.25em;
          }
          h3 {
            font-size: 1.75em;
            line-height: 1.25em;
          }
          h4 {
            font-size: 1.125em;
            line-height: 1.22222222em;
          }
          a {
            color: #DB0220;
            text-decoration: none;
          }
      `}</style>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
