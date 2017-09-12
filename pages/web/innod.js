import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class Innod extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Innovative Design"
        />
        <div className="page page--innod">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/web/innod-website.gif')}
              alt="innod"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Innovative Design Website
            </div>
            <div className="hero--summary">
              <p>
                Innovative Design is a design services club at UC Berkeley.
                The club offers 3 decals: Intro to Photoshop/Illustrator,
                Graphic Design Principles, and Photography Princples.
                The club also has (at the time of my graduation in 2017)
                four teams specializing in Graphic Design, Web Design,
                Videography and Photography.  These teams take on client
                requests (clients can be off campus or other clubs on campus)
                and simultaneously learn and build their own portfolios.
              </p>
              <br />
              <p>
                From Fall 2016 to Spring 2017 I was VP of Technology,
                which means that I had to create all the event websites
                for the semester.  But the biggest task I faced was
                  redesigning the Innovative Design website.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Concept and Design
            </div>
            <div className="textbox--content">
              <p>
                In creating this version of the website, I started completely over. I initially
                followed the layout of the last version of the website, which was
                a home page with some big landing video, and separate pages for About,
                Events, Decal, and Requests.  However upon further examination
                I saw many chances for improvement.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Home and About Page
            </div>
            <div className="textbox--content">
              <p>
                I wanted the home page to have some cool animation that showcased all the different
                design focuses of the club.  Thus came the typing animation at the top of this page.
                However, that was the only idea I had for the home page for a while.  After more
                brainstorming, and looking at the old about page, I realized that
                I needed a more visual way to display what Innovative Design was all about, and
                I could combine the home and about page.
              </p>
              <br />
              <p>
                The old about page was just a wall of text explaining what Innovative Design
                was about and how our design services worked.  I decided to break up each paragraph
                into visual categories on the home page, since it would be the first thing that
                visitors to the website would see.
              </p>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/works/web/innod/home.gif')}
                alt="home"
              />
            </div>
            <div className="text__wrapper">
              <div className="info__wrapper">
                <div className="title">
                  Home Page
                </div>
                <div className="text">
                  The combined home and about page, broken up into visuals describing the club.
                  You can navigate the home page by clicking on the little
                  circles at the bottom of the page or using your arrow keys.
                  I used different colors to make key words stand out.
                </div>
              </div>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Events
            </div>
            <div className="textbox--content">
              <p>
                The old event page was a blank page, which gave me a blank slate
                to work with. I decided to create a vertical timeline listing
                the dates of each event in the coming semester, since
                we regularly got a lot of messages asking about upcoming
                events.  Also, since a lot of our events were semesterly or annual,
                and the dates were usually decided before the beginning
                of the semester,
                it felt right to have a page where the public could be
                aware of events well in advance before they happen.
                The only thing I had to do after that was update the website regularly
                when the Facebook events and event websites were up.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Social Media and Requests
            </div>
            <div className="textbox--content">
              <p>
                Initially I had the social media links
                on the home page, on the last slide, but after feedback from the rest of
                the officers I decided that they should be more
                easily accessible from the rest of the website.
                Thus, I moved them to the top right section of the navigation bar,
                right next to Requests.  Since it worked so well
                you can see I continued this in my current
                personal website (this site)!
              </p>
              <br />
              <p>
                Requests, which is the main reason for people coming to visit the
                website, was given a special border to make it stand out
                even more and make it easier to find for first time
                visitors.
              </p>
              <br />
              <p>
                <a href="http://jubearsun.github.io/innovative-design/">Check out this iteration of the site live</a>.
                The repo is located on my <a href="https://github.com/jubearsun/innovative-design">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/web/newsletter/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Innovative Design Newsletter
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/web/hex/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    HEX Website
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
