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
        <meta name="author" content="Julia Sun" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Julia Sun | Welcome to a piece of my world!"
        />
        <meta
          name="keywords"
          content="julia sun, jubearsun, juuuuliasun, uc berkeley, google, software engineer, san francisco, bay area"
        />
        <meta
          property="og:image"
          content="http://juliasun.io/img/julia.jpg"
        />
        <meta
          property="og:title"
          content="Julia Sun"
        />
        <meta
          property="og:type"
          content="website" />
        <meta
          property="og:url"
          content="http://juliasun.io"
        />

        <link
          rel="icon"
          href={prefixLink('/img/favicon.ico')}
        />

        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Signika:300,400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
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

