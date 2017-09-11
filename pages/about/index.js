import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';

import _ from 'lodash';


export default class About extends React.Component {

  componentDidMount() {}

  render() {
    const interests = [
      {
        title: '@eatwithjam',
        desc: 'follow my friend and i as we eat the world!',
        img: '../img/about/eatwithjam.png',
        url: 'https://www.instagram.com/eatwithjam/',
      },
      {
        title: 'betta fish',
        desc: 'my bettas and betta myths',
        img: '../img/about/icecube.jpeg',
        url: '/about/betta/',
      },
      {
        title: 'musicals',
        desc: 'a list of the musicals i\'ve seen',
        img: '../img/about/musicals.jpeg',
        url: '/about/musicals/',
      },
    ];

    const interestElements = _.map(interests, (interest, index) =>
      <div
        key={`interestElem-${index}`}
        className="interest"
      >
        <a
          className="interest__link"
          href={interest.url}
        >
          <div
            className="interest__photo"
          >
            <img
              src={prefixLink(interest.img)}
              alt="interest"
            />
          </div>
          <div className="interest__overlay" />
          <div className="box" />
          <div className="interest__details">
            <div className="interest__details--title">
              { interest.title }
            </div>
            <div className="interest__details--desc">
              { interest.desc }
            </div>
          </div>
        </a>
      </div>,
    );

    return (
      <div>
        <Helmet
          title="Julia Sun | About"
        />
        <div className="page--about">
          <div className="top__wrapper">
            <div className="wrapper--left">
              <img
                src={prefixLink('../img/julia.jpg')}
                alt="julia"
              />
            </div>
            <div className="wrapper--right">
              <div className="info__wrapper">
                <div className="name__wrapper">
                  Julia Sun
                </div>
                <div className="desc">
                  Software engineer at <a href="https://www.google.com/intl/en/about/" target="_blank" rel="noreferrer noopener">Google</a>
                  <br />
                  UC Berkeley <a href="https://cs.berkeley.edu/" target="_blank" rel="noreferrer noopener">computer science</a>
                </div>
                <div className="desc small">
                  <p>
                    Hi! I&#39;m Julia. I created this website as a way to display some cool things
                    I&#39;ve made outside of actual life responsibilites (work, school, etc).
                    While at Berkeley, I was very involved in a design services club called <a href="http://innovativedesign.club" target="_blank" rel="noreferrer noopener">Innovative Design</a>.
                    Thus, a lot of the work showcased on this website is stuff I did
                    during that time.
                  </p>
                  <br />
                  <p>
                    I enjoy food,
                    betta fish, <a href="http://leagueoflegends.wikia.com/wiki/Poro" target="_blank" rel="noreferrer noopener">poros</a>,
                    Broadway musicals, <a href="http://www.zelda.com/" target="_blank" rel="noreferrer noopener">The Legend of Zelda</a> and <a href="http://gameofthrones.com/" target="_blank" rel="noreferrer noopener">Game of Thrones</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom__wrapper">
            { interestElements }
          </div>
        </div>
      </div>
    );
  }
}
