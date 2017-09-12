import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class Hex extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | HEX Website"
        />
        <div className="page page--hex">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/works/web/hex.gif')}
              alt="hex"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              HEX Website
            </div>
            <div className="hero--summary">
              <p>
                HEX is a free workshop series offered by Innovative Design
                to UC Berkeley students.  Workshops are led by
                members of Innovative Design and take place over a weekend.
                Each workshop focuses on a different design
                principle.
              </p>
              <br />
              <p>
                I actually created the HEX website three times over three
                semesters, but here I choose to share the
                intial design, from Spring 2016, which is my favorite.
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Concept and Design
            </div>
            <div className="textbox--content">
              <p>
                Since HEX was a fairly new event, there was no previous website.
                I was given the flyers which had the orange color
                and the head shown above.
              </p>
              <br />
              <p>
                I wanted to make the landing somewhat interesting, since
                the whole thing was going to be relatively simple with just a list
                of instructors and what they were teaching.  Therefore, I decided
                to jump into Illustrator and quickly invert the colors
                of the logo, creating a cool hover animation by
                stacking the two images on top of each other.
              </p>
              <br />
              <p>
                The rest of the website was fairly straightforward.  I just needed to created
                an about page explaining what HEX was and a section for the schedule.
                Since workshops often ran in parallel during the same timeslots, and
                there were two separate days that workshops happened, I
                opted to display the days side by side with each timeslot having two
                workshops that could be expanded further onclick, so as to make the schedule easier
                and more efficient
                to read.
              </p>
              <br />
              <p>
                <a href="http://jubearsun.github.io/hex.innovativedesign.club/">Check out this iteration of the site live</a>.
                The repo is located on my <a href="https://github.com/jubearsun/hex.innovativedesign.club">GitHub</a>.
              </p>
            </div>
          </div>
          <div className="page--nav">
            <a href={prefixLink('/web/innod/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Innovative Design Website
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/web/rgb/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    RGB Website
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
