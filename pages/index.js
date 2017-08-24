import React from 'react';
import Helmet from 'react-helmet';

const IndexComponent = () => (
  <div>
    <Helmet
      title="Julia Sun"
      meta={[
        {
          name: 'description',
          content: 'Julia Sun: Software, Design, Food',
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
          <a href="/about/">
            <img src="./img/julia.jpg" alt="julia" />
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
      <div className="bottom__wrapper">
        <div className="category">
          web design
        </div>
        <div className="category">
          photography
        </div>
        <div className="category">
          graphic design
        </div>
        <div className="category">
          travel
        </div>
      </div>
    </div>
  </div>
);

export default IndexComponent;

