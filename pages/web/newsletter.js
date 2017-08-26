import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class Newsletter extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Newsletter"
        />
        <div className="page page--newsletter">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/web/newsletter.png')}
              alt="newsletter"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Innovative Design Newsletter
            </div>
            <div className="hero--summary">
              <p>
                Every month, Innovative Design admin sends out an email newsletter about
                to members of the club recapping the past four weeks.  In February 2017,
                the admin, Barbara, decided to make a website instead of an email.
                She mocked up the newsletter and asked me for help to implement it.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Making a Mockup Come To Life
            </div>
            <div className="textbox--content">
              <p>
                Up until this time, I had never implemented anyone else&#39;s design.  I had
                always designed any website I had to make on my own, and I admittedly
                was too lazy to bother with mockups. Instead, I mostly sketched out
                the layout in my mind or came up with ideas as I went along.
              </p>
              <br />
              <p>
                Barbara sent me the mockup (<a href="http://barbarayang.co/assets/Newsletter%201.pdf">shown here</a>)
                and asked me if I could come up with the intial layout so that
                she could update and maintain it in the coming months.  I quickly put together
                the static site, deciding to stick with vanilla HTML/CSS from
                my <a href="https://github.com/jubearsun/vanilla-boilerplate">boilerplate</a> to make it
                easier.
              </p>
              <br />
              <p>
                I am glad I had the opportunity to implement a design
                that I had not come up with myself.  Subconsciously, when I&#39;m making
                something that is my own brainchild, I tend to come up with designs I already
                know how to implement.  So, although this newsletter was not
                particularly difficult
                it gave me satisfaction that I had learned enough about HTML and CSS to
                put together what probably would have taken me many more
                hours even just a year prior.
                Additionally, it highlighted for me the major differences between web and graphic
                design.  When you create something in Illustrator or Sketch, it&#39;s static and
                you don&#39;t have to worry about responsiveness and how it looks on different
                sized screens.  But when you&#39;re making a website, you need to think about
                how things look when the screen is being resized, on different browsers and devices,
                and how the user interacts with your site.
              </p>
              <br />
              <p>
                Since my initial February implementation, the site has been updated once to the
                March newsletter, but still maintains the same layout that I created. <a href="http://jubearsun.github.io/innod-newsletter/">You can check out the March 2017 newsletter here.</a> The
                repo is on my <a href="https://github.com/jubearsun/innod-newsletter">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/web/cmyk/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    CMYK Website
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/web/innod/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    Innovative Design Website
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
