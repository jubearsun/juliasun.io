import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';


export default class Web extends React.Component {

  componentDidMount() {}

  render() {
    const works = [
      {
        title: 'CMYK',
        img: '../img/works/web/cmyk.gif',
        link: 'cmyk/',
      },
      {
        title: 'Innovative Design',
        img: '../img/works/web/innod-website.gif',
        link: 'innod/',
      },
      {
        title: 'Innovative Design Newsletter',
        img: '../img/works/web/newsletter.png',
        link: 'newsletter/',
      },
      {
        title: 'HEX',
        img: '../img/works/web/hex.gif',
        link: 'hex/',
      },
      {
        title: 'RGB',
        img: '../img/works/web/rgb.gif',
        link: 'rgb/',
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
          </div>
        </div>
      </a>,
    );

    return (
      <div>
        <Helmet
          title="Julia Sun | Web Design"
        />
        <div className="page--travel">
          <div className="pinterest__grid--small">
            { workElems }
          </div>
        </div>
      </div>
    );
  }
}
