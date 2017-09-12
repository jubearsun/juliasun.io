import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class Infographic extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Betta Infographic"
        />
        <div className="page page--infographic">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/graphic/betta.png')}
              alt="infographic"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Betta Infographic
            </div>
            <div className="hero--summary">
              <p>
                In the Intro to Illustrator/Photoshop Decal, our midterm
                project was to create an infographic about something
                we were passionate about. Naturally, I picked the topic
                of betta fish!
              </p>
              <br />
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Design
            </div>
            <div className="textbox--content">
              <p>
                I went for a cute, cartoonish look because I wanted
                the infographic to be fun but informative. I picked
                the top four facts about betta fish that I thought
                most people wouldn&#39;t know and that I could
                easily illustrate and centered them around
                a very simple graphic of a betta fish.
              </p>
              <br />
              <p>
                I was told that my baby betta fish looked like rice grains.
                I also had a lot of fun making the bubbles, I learned
                how from a quick tutorial I found online.
              </p>
              <br />
              <p>
                If you&#39;re interested in reading more about betta fish,
                make sure you check out <a href={prefixLink('/about/betta/')}>my page about bettas.</a>
              </p>
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/graphics/link/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Pen Tooling Link
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/graphics/calday/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    Cal Day Marketing
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
