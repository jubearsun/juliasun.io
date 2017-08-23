import React from 'react';
import Helmet from 'react-helmet';

const IndexComponent = () => (
  <div>
    <Helmet
      title="Julia Sun"
      meta={[
        {
          name: 'description',
          content: 'Sample',
        },
        {
          name: 'keywords',
          content: 'sample, something',
        },
      ]}
    />
    Julia Sun
  </div>
);

export default IndexComponent;

