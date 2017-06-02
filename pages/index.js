import React from 'react';
import Helmet from 'react-helmet';

const IndexComponent = () => (
  <div>
    <Helmet
      title="Hello World"
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
    <h1>
      Hello World!
    </h1>
  </div>
);

export default IndexComponent;

