import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const buildTime = new Date().getTime();

const Html = ({ body }) => {
  const head = Helmet.rewind();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {head.title.toComponent()}
        {head.meta.toComponent()}

        {process.env.NODE_ENV === 'production' ? (
          <style
            dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }}
          />
        ) : (
          null
        )}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${buildTime}`)} />
      </body>
    </html>
  );
};

Html.propTypes = {
  body: React.PropTypes.string,
};

Html.defaultProps = {
  body: '',
};

export default Html;

