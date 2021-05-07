import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../img/thalesday_logo_vertical_rgb_gradient_no-bg.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black-bis has-text-white-ter">
        <div className="content has-text-centered">
          <AniLink
            cover 
            direction="left" 
            bg="#f09b0d"
            to="/" 
          >
            <img
              src={logo}
              alt="Thales Day"
              style={{ width: '6em' }}
            />
          </AniLink>
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <AniLink cover direction="right" bg="#f09b0d" to="/" className="navbar-item">
                        Home
                      </AniLink>
                    </li>
                    <li>
                      <AniLink cover direction="left" bg="#f09b0d" className="navbar-item" to="/info">
                        Info
                      </AniLink>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <AniLink cover direction="left" bg="#f09b0d" className="navbar-item" to="/blog">
                        Blog
                      </AniLink>
                    </li>
                    <li>
                      <AniLink cover direction="left" bg="#f09b0d" className="navbar-item" to="/contact">
                        Contact
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/traditionofphilosophyandscience/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/thalesday/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
