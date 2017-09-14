import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { IndexLink, Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import '../css/_index.scss';

const navbarHeight = 60;
const navbarWidth = 1280;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    this._handleHamburger = this._handleHamburger.bind(this);
    this._activeClass = this._activeClass.bind(this);
  }

  _handleHamburger(e) {
    e.preventDefault();
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  _handleNavLink(e) {
    this.setState({
      open: false
    });
  }

  _activeClass(path) {
    if (this.props.location.pathname.indexOf(path) === 0) {
      return 'nav__link--active';
    }
    return '';
  }

  render() {
    return (
      <div className="root">
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight,
            maxWidth: navbarWidth,
            margin: '0 auto',
          }}
        >
          <div
            className={classNames("nav", {
              "nav--open": this.state.navOpen
            })}
          >
            <div className="nav__wrapper">
              <div
                className={classNames("nav__item", "nav__hamburger", {
                  "nav__hamburger--active": this.state.navOpen
                })}
                onClick={this._handleHamburger}
              >
                <div className="hamburger__bar bar--1"></div>
                <div className="hamburger__bar bar--2"></div>
              </div>
              <div className="nav__item nav__media">
                <a href="https://twitter.com/juuuuliasun" target="_blank" rel="noreferrer noopener">
                  <FontAwesome
                    className="media__icon twitter"
                    name="twitter"
                  />
                </a>
                <a href="https://instagram.com/juuuuliasun" target="_blank" rel="noreferrer noopener">
                  <FontAwesome
                    className="media__icon instagram"
                    name="instagram"
                  />
                </a>
                <a href="https://www.linkedin.com/in/juliasun5/" target="_blank" rel="noreferrer noopener">
                  <FontAwesome
                    className="media__icon linkedin"
                    name="linkedin-square"
                  />
                </a>
                <a href="https://github.com/jubearsun" target="_blank" rel="noreferrer noopener">
                  <FontAwesome
                    className="media__icon github"
                    name="github-alt"
                  />
                </a>
                <a href="mailto:jubear.sun@gmail.com+juliasunio" target="_blank" rel="noreferrer noopener">
                  <FontAwesome
                    className="media__icon email"
                    name="envelope"
                  />
                </a>
              </div>
              <IndexLink
                className="nav__item nav__link"
                to={ prefixLink('/') }
                onClick={this._handleNavLink}
                activeStyle={{background: '#d286e2', color: 'white'}}
              >
                Home
              </IndexLink>
              <Link
                className={`nav__item nav__link ${this._activeClass('/about/')}`}
                to={ prefixLink('/about/') }
                onClick={this._handleNavLink}
              >
                About
              </Link>
              <Link
                className={`nav__item nav__link ${this._activeClass('/web/')}`}
                to={ prefixLink('/web/') }
                onClick={this._handleNavLink}
              >
                Web
              </Link>
              <Link
                className={`nav__item nav__link ${this._activeClass('/graphics/')}`}
                to={ prefixLink('/graphics/') }
                onClick={this._handleNavLink}
              >
                Graphics
              </Link>
              <Link
                className={`nav__item nav__link ${this._activeClass('/photo/')}`}
                to={ prefixLink('/photo/') }
                onClick={this._handleNavLink}
              >
                Photo
              </Link>
              <Link
                className={`nav__item nav__link ${this._activeClass('/travel/')}`}
                to={ prefixLink('/travel/') }
                onClick={this._handleNavLink}
              >
                Travel
              </Link>
            </div>
          </div>
        </Headroom>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

