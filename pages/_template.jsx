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
          activeStyle={{ color: 'red' }}
        >
          about
        </IndexLink>
        <Link
          className="nav__item"
          to={ prefixLink('/work/') }
          activeStyle={{ color: 'red' }}
        >
          work
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

