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

  render() {
    return (
      <div className="root">
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight,
            maxWidth: navbarWidth,
            margin: '0 auto'
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.99)'
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
                <a href="https://twitter.com/juuuuliasun" target="_blank">
                  <FontAwesome
                    className="media__icon twitter"
                    name="twitter"
                  />
                </a>
                <a href="https://www.linkedin.com/in/juliasun5/" target="_blank">
                  <FontAwesome
                    className="media__icon linkedin"
                    name="linkedin-square"
                  />
                </a>
                <a href="https://github.com/jubearsun" target="_blank">
                  <FontAwesome
                    className="media__icon github"
                    name="github-alt"
                  />
                </a>
                <a href="mailto:jubear.sun@gmail.com+juliasunio" target="_blank">
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
                activeStyle={{ background: '#d286e2', color: 'white' }}
              >
                Home
              </IndexLink>
              <Link
                className="nav__item nav__link"
                to={ prefixLink('/about/') }
                onClick={this._handleNavLink}
                activeStyle={{ background: '#d286e2', color: 'white' }}
              >
                About
              </Link>
              <Link
                className="nav__item nav__link"
                to={ prefixLink('/web/') }
                onClick={this._handleNavLink}
                activeStyle={{ background: '#d286e2', color: 'white' }}
              >
                Web
              </Link>
              <Link
                className="nav__item nav__link"
                to={ prefixLink('/photo/') }
                onClick={this._handleNavLink}
                activeStyle={{ background: '#d286e2', color: 'white' }}
              >
                Photo
              </Link>
              <Link
                className="nav__item nav__link"
                to={ prefixLink('/graphics/') }
                onClick={this._handleNavLink}
                activeStyle={{ background: '#d286e2', color: 'white' }}
              >
                Graphics
              </Link>
              <Link
                className="nav__item nav__link"
                to={ prefixLink('/travel/') }
                onClick={this._handleNavLink}
                activeStyle={{ background: '#d286e2', color: 'white' }}
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

