import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';

const works = [
  {
    title: 'Web Design',
    img: '../img/works/web.gif',
    link: '/web/',
  },
  {
    title: 'Graphic Design',
    img: '../img/works/graphic.png',
    link: '/graphics/',
  },
  {
    title: 'Photography',
    img: '../img/works/photo/2.jpg',
    link: '/photo/',
  },
];

const workElems = _.map(works, (work, index) =>
  <a href={prefixLink(work.link)}>
    <div
      key={`workElem-${index}`}
      className="img__wrapper"
    >
      <img
        src={prefixLink(work.img)}
        alt="work"
      />
      <div className="overlay" />
      <div className="text">
        <div className="title">
          { work.title }
        </div>
        <div className="subtitle">
          { work.subtitle }
        </div>
      </div>
    </div>
  </a>,
);

const IndexComponent = () => (
  <div>
    <Helmet
      title="Julia Sun"
      meta={[
        {
          name: 'description',
          content: 'Welcome to a piece of my world!',
        },
        {
          name: 'keywords',
          content: 'julia sun, uc berkeley, innovative design, google, san francisco, bay area, designer, software',
        },
      ]}
    />
    <div className="page--home">
      <div className="top__wrapper">
        <div className="wrapper--left">
          <a href={prefixLink('/about/')}>
            <img
              src={prefixLink('./img/julia.jpg')}
              alt="julia"
            />
          </a>
        </div>
        <div className="wrapper--right">
          <div className="info__wrapper">
            <div className="name__wrapper">
              Julia Sun
            </div>
            <div className="desc">
              San Francisco Bay Area
            </div>
            <div className="desc color">
              software & design
            </div>
          </div>
        </div>
      </div>
      <div className="grid--home">
        { workElems }
      </div>
    </div>
  </div>
);

export default IndexComponent;

