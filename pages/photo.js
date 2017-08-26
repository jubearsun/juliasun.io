import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';


export default class Photo extends React.Component {

  componentDidMount() {}

  render() {
    const works = [
      {
        img: '../img/works/photo/2.jpg',
      },
      {
        img: '../img/works/photo/1.jpg',
      },
      {
        img: '../img/works/photo/3.jpg',
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
      </div>,
    );

    return (
      <div>
        <Helmet
          title="Julia Sun | Photography"
        />
        <div className="page--photo">
          <div className="pinterest__grid--small">
            { workElems }
          </div>
        </div>
      </div>
    );
  }
}
