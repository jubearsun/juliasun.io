import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class CalDay extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Cal Day Marketing"
        />
        <div className="page page--calday">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/graphic/calday/calday.png')}
              alt="calday"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Cal Day Marketing
            </div>
            <div className="hero--summary">
              <p>
                For Cal Day, the Innovative Design Marketing team decided to
                make post cards to pass out to the prospective freshmen.
                Each member made at least one graphic of a building on campus
                and all of them were combined to go on the final postcard.
              </p>
              <br />
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Sather Gate
            </div>
            <div className="textbox--content">
              <p>
                I chose Sather Gate since it is the entrance of Berkeley
                and a prominent landmark.  I actually had a really hard
                time fleshing out the details once I got
                the basic outline done, since I tend to oversimplify my designs.
                My friend Tina helped me by asking me to take a look
                at pictures of the real Sather Gate and filling in more details...
                for example, in my first iteration, I didn&#39;t even have the detailing
                  on the pillars nor the crosses on the lamps.
              </p>
              <br />
              <p>
                I&#39;m honored that so many prospective freshmen and current UC Berkeley
                students now own something that I made!
              </p>
            </div>
          </div>
          <div className="double__wrapper cal">
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/graphic/calday/calday-front.png')}
                alt="front"
              />
            </div>
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/graphic/calday/calday-back.png')}
                alt="back"
              />
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('../infographic/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Betta Infographic
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('../link/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    Pen Tooling Link
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}