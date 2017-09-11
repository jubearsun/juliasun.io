import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';


export default class Travel extends React.Component {

  componentDidMount() {}

  render() {
    const travels = [
      {
        title: 'New York',
        subtitle: 'Hamilton Grange',
        img: '../img/travel/ny-1.jpg',
      },
      {
        title: 'New York',
        subtitle: 'The High Line',
        img: '../img/travel/ny-2.jpg',
      },
      {
        title: 'Chicago',
        subtitle: 'Chicago River',
        img: '../img/travel/chicago-1.jpg',
      },
      {
        title: 'Chicago',
        subtitle: 'The Bean',
        img: '../img/travel/chicago-2.jpg',
      },
      {
        title: 'Chicago',
        subtitle: 'Sears Tower',
        img: '../img/travel/chicago-3.jpg',
      },
      {
        title: 'Iceland',
        subtitle: 'Blue Lagoon',
        img: '../img/travel/iceland-2.jpg',
      },
      {
        title: 'Iceland',
        subtitle: 'Seljavallalaug',
        img: '../img/travel/iceland-1.jpg',
      },
      {
        title: 'Iceland',
        subtitle: 'Black Sand Beach',
        img: '../img/travel/iceland-3.jpg',
      },
      {
        title: 'Napa Valley',
        subtitle: 'Beringer Vineyards',
        img: '../img/travel/napa-1.jpg',
      },
      {
        title: 'Iceland',
        subtitle: 'Loft Hostel, Reykjavik',
        img: '../img/travel/iceland-4.jpg',
      },
      {
        title: 'Iceland',
        subtitle: 'Old Harbor, Reykjavik',
        img: '../img/travel/iceland-5.jpg',
      },
      {
        title: 'Chicago',
        subtitle: 'View from 360 Chicago',
        img: '../img/travel/chicago-4.jpg',
      },
    ];

    const travelElems = _.map(travels, (travel, index) =>
      <div
        key={`travelElem-${index}`}
        className="img__wrapper"
      >
        <img
          src={prefixLink(travel.img)}
          alt="travel"
        />
        <div className="overlay" />
        <div className="text">
          <div className="title">
            { travel.title }
          </div>
          <div className="subtitle">
            { travel.subtitle }
          </div>
        </div>
      </div>,
    );

    return (
      <div>
        <Helmet
          title="Julia Sun | Travels"
        />
        <div className="page--travel">
          <div className="pinterest__grid">
            { travelElems }
          </div>
        </div>
      </div>
    );
  }
}
