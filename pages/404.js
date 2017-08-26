import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line

const IndexComponent = () => (
  <div className="not-found">
    <div className="text">
      Well this is awkward...the page you were looking for doesn&apos;t seem to exist.
      <p>
        <a href={prefixLink('/')}>Return to home page</a>.
      </p>
    </div>
  </div>
);

export default IndexComponent;

