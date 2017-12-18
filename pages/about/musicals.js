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
        desc: 'Lin Manuel Miranda\'s first musical before Hamilton was also my first musical!',
        img: '../../img/about/musicals/intheheights.jpg',
      },
      {
        title: 'Les Miserables',
        location: 'SHN Orpheum Theater',
        desc: 'One of my favorite musicals, also read the book, which was pretty amazing in itself',
        img: '../../img/about/musicals/lesmis.jpeg',
      },
      {
        title: 'Book of Mormon',
        location: 'Eugene O\'Neill Theater',
        desc: 'I didn\'t know it was by the creators of South Park until after the show, then everything made a lot of sense',
        img: '../../img/about/musicals/bookofmormon.png',
      },
      {
        title: 'Phantom of the Opera',
        location: 'SHN Orpheum Theater',
        desc: 'Saw the movie, read the book, and the musical was definitely the best out of the three!',
        img: '../../img/about/musicals/phantom.jpg',
      },
      {
        title: 'Hamilton',
        location: 'SHN Orpheum Theater',
        desc: 'The musical that everyone knows, it was so good I saw it twice and would be down to see it again.  I also read the book, highly recommend it too.',
        img: '../../img/about/musicals/hamilton.jpg',
      },
      {
        title: 'Wicked',
        location: 'Gershwin Theater',
        desc: 'Jennifer Dinoia played Elphaba at my showing and she was amazing.  I also get really hyped at a good Defying Gravity.',
        img: '../../img/about/musicals/wicked.png',
      },
      {
        title: 'Lion King',
        location: 'Minskoff Theater',
        desc: 'Probably the most visually appealing and expensive show I\'ve ever seen, would definitely watch it again',
        img: '../../img/about/musicals/lionking.png',
      },
      {
        title: 'Aladdin',
        location: 'SHN Orpheum Theater',
        desc: 'Adam Jacobs, the original Aladdin, was at my showing!  There were some great special effects and magic tricks.',
        img: '../../img/about/musicals/aladdin.jpg',
      },
      {
        title: 'Coming Soon!',
        location: 'Fun fact: I was actually also supposed to watch Addams Family but got sick and missed it!',
        img: '../../img/about/musicals/filler.png',
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
          <div className="desc">
            { musical.desc }
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
          <div className="grid__wrapper">
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
