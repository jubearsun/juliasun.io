import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class CMYK extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | CMYK"
        />
        <div className="page page--cmyk">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/web/cmyk.gif')}
              alt="cmyk"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              CMYK Designathon
            </div>
            <div className="hero--summary">
              <p>
                CMYK Designathon is an annual designathon hosted by Innovative Design
                at UC Berkeley, open to all students.  Students team up
                to design something while a panel of designers from the industry
                give workshops and speeches and act as judges for the designathon.
              </p>
              <br />
              <p>
                I was tasked with making the event website for Fall 2016.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Concept and Design
            </div>
            <div className="textbox--content">
              <p>
                CMYK stands for &ldquo;Come Make Your Mark&rdquo; in the case of the event,
                but according to Wikipedia CMYK is also the color model referring to the
                ink colors used in printing,
                cyan, magenta, yellow and key (black).
              </p>
              <br />
              <p>
                I decided to play incorporate the colors into the website by creating
                a single page scroller, where each section had a different background color.
                Coincidentally there were four sections for each of the four colors.
              </p>
              <br />
              <p>
                The idea for the flyers for the event was to be origami letters.
                Given the flyers, I decided that it would be cool to make a step
                by step origami animation to spice up the site some more.  This
                is the animation you see at the top of the page.
              </p>
              <br />
              <p>
                <a href="http://jubearsun.github.io/cmyk">Check out this iteration of the site live</a>.
                The repo is on my <a href="https://github.com/jubearsun/cmyk">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="double__wrapper">
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/web/cmyk/flyer-front.jpg')}
                alt="front"
              />
            </div>
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/web/cmyk/flyer-back.jpg')}
                alt="back"
              />
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/web/holiday-ui/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Holiday UI
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/web/newsletter/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    Innovative Design Newsletter
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
