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
        link: '',
      },
      {
        title: 'Innovative Design Website',
        img: '../img/works/web/innod-website.gif',
        link: '',
      },
      {
        title: 'HEX Workshop',
        img: '../img/works/web/instagram-grid.png',
        link: '',
      },
      {
        title: 'Innovative Design Newsletter',
        img: '../img/works/web/newsletter.png',
        link: '',
      },
      {
        title: 'HEX',
        img: '../img/works/web/hex.gif',
        link: '',
      },
      {
        title: 'RGB',
        img: '../img/works/web/rgb.gif',
        link: '',
      },
    ];

    const workElems = _.map(works, (work, index) =>
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
      </div>,
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
