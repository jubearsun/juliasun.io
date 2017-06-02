import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
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
        <a className="nav__item" href={ prefixLink('/') }>
          about
        </a>
        <a className="nav__item" href={ prefixLink('/work/') }>
          work
        </a>
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

