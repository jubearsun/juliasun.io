import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';


export default class Graphics extends React.Component {

  componentDidMount() {}

  render() {
    const works = [
      {
        title: 'Betta Infographic',
        img: '../img/works/graphic/betta.png',
        link: '/graphics/infographic/',
      },
      {
        title: 'Pen Tooling Link',
        img: '../img/works/graphic/link.png',
        link: '/graphics/link/',
      },
      {
        title: 'Cal Day Marketing',
        img: '../img/works/graphic/sathergate.png',
        link: '/graphics/calday/',
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
          title="Julia Sun | Graphic Design"
        />
        <div className="page--graphics">
          <div className="pinterest__grid--small">
            { workElems }
          </div>
        </div>
      </div>
    );
  }
}
