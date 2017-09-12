import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class Link extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Pen Tooling Link"
        />
        <div className="page page--link">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/graphic/pentool.png')}
              alt="link"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Pen Tooling Link
            </div>
            <div className="hero--summary">
              <p>
                In the Intro to Photoshop/Illustrator Decal, in order
                to get us familiarized with pen tool, we were to pick
                a cartoon character and trace it, then fill it in
                ourselves.
              </p>
              <br />
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              The Legend of Zelda: Pen Tool
            </div>
            <div className="textbox--content">
              <p>
                I chose Toon Link because he is my favorite character in Super
                Smash Brothers and because, since I like a very cartoonish simple
                style, I thought he would be easier to do than
                Twilight Princess Link or Breath of the Wild Link. Also, I am a huge
                Zelda nerd.
              </p>
              <br />
              <p>
                The biggest challenge was shading him in.  I learned pretty much
                all I know now about layers and eyedrop from coloring him and
                trying (but failing) not to overlap different colored outlines.
              </p>
              <br />
              <p>
                Although this project took me a really long time and
                was super frustrating for me initially, I think it
                is solely responsible for getting me familiar enough with Illustrator
                to create the rest of the graphics showcased on my website.
                I&#39;m pretty happy with how it turned out.
              </p>
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/graphics/calday/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Cal Day Marketing
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/graphics/infographic/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    Betta Infographic
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
