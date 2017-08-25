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
      },
      {
        title: 'Pen Tooling Link',
        img: '../img/works/graphic/link.png',
      },
      {
        title: 'Cal Day Marketing',
        img: '../img/works/graphic/sathergate.png',
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
