import React from 'react'
import logo from '../img/thalesday_logo_horizontal_no-tag_no-bg_rgb_v01-03.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './_overflow.css'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent has-background-black-ter"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <AniLink cover direction="right" bg="#f09b0d" to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Thales Day" style={{ width: '88px' }} />
            </AniLink>
            {/* Hamburger menu */}
            {/* eslint-disable-next-line*/}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu has-background-black-ter ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <AniLink className="navbar-item" cover direction="left" bg="#f09b0d" to="/info" >
                Info
              </AniLink>
              <AniLink className="navbar-item" cover direction="left" bg="#f09b0d" to="/blog" >
                Blog
              </AniLink>
              <AniLink className="navbar-item" cover direction="left" bg="#f09b0d" to="/contact" >
                Contact
              </AniLink>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/traditionofphilosophyandscience/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.instagram.com/thalesday/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Instagram" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
