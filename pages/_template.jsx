import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { IndexLink, Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import '../css/base.scss';

const IndexContainer = ({ children }) => (
  <div>
    <Headroom
      style={{
        height: '60px',
      }}
    >
      <div className="nav__wrapper">
        <IndexLink
          className="nav__item"
          to={ prefixLink('/') }
          activeStyle={{ color: '#d286e2' }}
        >
          home
        </IndexLink>
        <Link
          className="nav__item"
          to={ prefixLink('/about/') }
          activeStyle={{ color: '#d286e2' }}
        >
          about
        </Link>
        <Link
          className="nav__item"
          to={ prefixLink('/web/') }
          activeStyle={{ color: '#d286e2' }}
        >
          web
        </Link>
        <Link
          className="nav__item"
          to={ prefixLink('/photo/') }
          activeStyle={{ color: '#d286e2' }}
        >
          photo
        </Link>
        <Link
          className="nav__item"
          to={ prefixLink('/graphic/') }
          activeStyle={{ color: '#d286e2' }}
        >
          graphic
        </Link>
        <Link
          className="nav__item"
          to={ prefixLink('/travel/') }
          activeStyle={{ color: '#d286e2' }}
        >
          travel
        </Link>
      </div>
    </Headroom>
    <div>
      {children}
    </div>
  </div>
);

IndexContainer.propTypes = {
  children: PropTypes.element,
};

IndexContainer.defaultProps = {
  children: null,
};

export default IndexContainer;

