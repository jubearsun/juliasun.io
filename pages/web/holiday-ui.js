import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class HolidayUI extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Holiday UI"
        />
        <div className="page page--holiday">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/web/holiday/xmas-header.gif')}
              alt="xmas"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Christmas Holiday UI
            </div>
            <div className="hero--summary">
              <p>
                Every holiday season, Google Search Ads team creates festive UIs to trigger
                on any Christmas, Hanukkah or Kwanzaa related query.
              </p>
              <br />
              <p>
                I volunteered to implement the Christmas UI in Winter 2017.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Concept and Design
            </div>
            <div className="textbox--content">
              <p>
                Working with the UX team, we decided to go for food-themed holidays this season.
                The Christmas, Hanukkah and Kwanzaa animations are therefore all food related.
              </p>
              <br />
              <p>
                Assets were given to us by the UX team and off we went to implement them!
              </p>
              <br />
              <p>
                Any related queries to Christmas, Hanukkah, and Kwanzaa triggers the respective
                UIs.  Check them out below!
              </p>
              <br />
              <p>
                Check out the <a href="https://searchengineland.com/google-wraps-hanukkah-kwanzaa-christmas-festivus-search-page-banners-usual-holiday-decor-287765">news article</a> by
                Search Engine Land about the holiday decorations.
              </p>
            </div>
          </div>
          <div className="belt__wrapper--resize">
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/web/holiday/xmas.gif')}
                alt="xmas"
              />
            </div>
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/web/holiday/hanukkah.gif')}
                alt="hanukkah"
              />
            </div>
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/web/holiday/kwanzaa.gif')}
                alt="kwanzaa"
              />
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/web/rgb/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    RGB Website
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/web/cmyk/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    CMYK Website
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
