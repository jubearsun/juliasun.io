import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';


export default class Musicals extends React.Component {

  componentDidMount() {}

  render() {
    const musicals = [
      {
        title: 'In The Heights',
        location: 'Richards Rodgers Theater',
        img: '../../img/about/musicals/intheheights.jpg',
      },
      {
        title: 'Les Miserables',
        location: 'SHN Orpheum Theater',
        img: '../../img/about/musicals/lesmis.jpeg',
      },
      {
        title: 'Book of Mormon',
        location: 'Eugene O\'Neill Theater',
        img: '../../img/about/musicals/bookofmormon.png',
      },
      {
        title: 'Phantom of the Opera',
        location: 'SHN Orpheum Theater',
        img: '../../img/about/musicals/phantom.jpg',
      },
      {
        title: 'Hamilton',
        location: 'SHN Orpheum Theater',
        img: '../../img/about/musicals/hamilton.jpg',
      },
      {
        title: 'Wicked',
        location: 'Gershwin Theater',
        img: '../../img/about/musicals/wicked.png',
      },
      {
        title: 'Lion King',
        location: 'Minskoff Theater',
        img: '../../img/about/musicals/lionking.png',
      },
    ];

    const musicalElems = _.map(musicals, (musical, index) =>
      <div
        key={`musicalElem-${index}`}
        className="img__wrapper"
      >
        <img
          src={prefixLink(musical.img)}
          alt="musical"
        />
        <div className="overlay" />
        <div className="text">
          <div className="title">
            { musical.title }
          </div>
          <div className="location">
            { musical.location }
          </div>
        </div>
      </div>,
    );

    return (
      <div>
        <Helmet
          title="Julia Sun | Musicals"
        />
        <div className="page--musicals">
          <div className="belt__wrapper">
            { musicalElems }
          </div>
        </div>
        <div className="page--nav">
          <a href={prefixLink('/about/betta/')}>
            <div className="button">
              <div className="desc">
                <div className="desc--title">
                  Previous
                </div>
                <div className="desc--content">
                  Learn about bettas
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/eatwithjam/">
            <div className="button">
              <div className="desc">
                <div className="desc--title">
                  Next
                </div>
                <div className="desc--content">
                  Follow my food adventures
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
