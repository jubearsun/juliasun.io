import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class RGB extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | RGB Website"
        />
        <div className="page page--rgb">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/web/rgb.gif')}
              alt="rgb"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              RGB Website
            </div>
            <div className="hero--summary">
              <p>
                RGB is an annual workshop and speakers series hosted by Innovative Design
                focusing on how to break into the design industry.
              </p>
              <br />
              <p>
                I created the RGB website twice, once in Spring 2016 and one more time
                in Spring 2017.  I am showcasing the Spring 2017 version as it is
                my preferred version.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Concept and Design
            </div>
            <div className="textbox--content">
              <p>
                RGB stands for &ldquo;Reach, Grow, Build&rdquo; in this
                case but it is also the color
                model based on red, green, and blue.  Therefore I
                decided to incorporate the colors red, green, and
                blue into the design of the website.
              </p>
              <br />
              <p>
                Instead of making the background change colors as
                the case with <a href={prefixLink('../cmyk/')}>CMYK</a>,
                I decided to leave a white background and create
                splotches of RGB colors that generate randomly throughout the
                page.  All links, overlays were colored RGB as well.
              </p>
              <br />
              <p>
                <a href="http://jubearsun.github.io/rgb.innovativedesign.club/">Check out this iteration of the site live</a>.
                The repo is located on my <a href="https://github.com/jubearsun/rgb.innovativedesign.club">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/web/hex/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    HEX Website
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/web/holiday-ui/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    Holiday UI
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
