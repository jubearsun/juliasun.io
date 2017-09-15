import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';


export default class Betta extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet
          title="Julia Sun | Bettas"
        />
        <div className="page page--bettas">
          <div className="hero--img">
            <img
              src={prefixLink('../../img/about/bettas/fts.jpeg')}
              alt="fts"
            />
          </div>
          <div className="hero--label">
            <div className="hero--title">
              Bettas Myths and My Bettas
            </div>
            <div className="hero--summary">
              <p>
                Also known as the Siamese Fighting Fish, Betta Splendens
                are a popular but misunderstood pet fish.  Here I document
                my journey into the world of bettas while also dispelling some
                common betta myths.
              </p>
              <br />
              <p>
                The above is a picture of a 10 gallon low tech planted tank home
                to Dratini the betta and Nautilus the snail (he&#39;s hiding
                  behind the log so he&#39;s not visible).
              </p>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Accidentally getting my first betta
            </div>
            <div className="textbox--content">
              <p>
                I was at PetSmart on a whim when I picked up a gorgeous blue and white
                betta and decided to take him home.  I bought him and a little 1-gallon
                tank to keep him in.
                At the time, I didn&#39;t really think he would make any special impression on me, I
                just wanted him because he was pretty.
              </p>
              <br />
              <p>
                The morning after I got him, I went to feed him and he was waiting for me
                at the top of the tank and &mdash; for lack of better word
                &mdash; &ldquo;wagging&rdquo;
                his tail at me.  That&#39;s when I realized
                hey, this guy is actually kind of cool.  I observed how he
                carefully marked where the pellets
                were that I dropped and aimed for them, a big difference from the
                goldfish I used to have
                that would gulp mindlessly at the surface of the water.
              </p>
              <br />
              <p>
                I began to actually do research on betta fish and I realized I was
                doing everything wrong (protip: do your research before you
                buy a pet).  There&#39;s a long list of things you need to
                do before you even get the fish, so I won&#39;t get into all of it here,
                but the subreddit <a href="https://www.reddit.com/r/bettafish/">/r/bettafish</a> helped
                me a lot to get started.
              </p>
              <br />
              <p>
                One of the biggest misconceptions that I fell victim to was that
                betta fish don&#39;t need a lot
                of space since they live in puddles in their natural habitat.  Actually,
                they may not need a lot of space compared to other fish, but
                though their natural habitats are shallow rice paddies, these rice
                paddies actually stretch hundreds of miles.  Yes, they can and do
                sometimes live in puddles when the water dries up, but
                they have the ability to jump from puddle to puddle
                when the water quality deterioriates.  They are not meant
                to live in these puddles for the long term.
              </p>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/about/bettas/3gal.jpg')}
                alt="3 gallon tank"
              />
            </div>
            <div className="text__wrapper">
              <div className="info__wrapper">
                <div className="title">
                  Ice Cube in a 3 Gallon Tank
                </div>
                <div className="text">
                  <p>
                    I upgraded my betta to a 3 gallon tank once I realized that the 1
                    gallon was definitely not going to be sufficient for him.
                  </p>
                  <br />
                  <p>
                    Although
                    the suggested minimum is 5 gallons, I was still in college
                    at the time and had limited space.  I also needed to be able to
                    transport him easily
                    back and forth from school and home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              Bettas can change colors
            </div>
            <div className="textbox--content">
              <p>
                At the pet store, they can be under a lot of stress and not
                in their ideal conditions.  Bettas are tropical fish
                and require water temperature of 78 to 80 degrees Fahrenheit.
                They also require good diet of meat-based food since they
                are carnivores (a lot of betta pellets&lsquo; main ingredient is
                wheat flour).
              </p>
              <br />
              <p>
                Once they&#39;re home in clean, warm water, their true colors
                and personalities will
                come out.  Ice Cube, my first betta, was super active and hyper
                since day one.  On the other hand, my second betta, Dratini, was
                extremely shy and scared of everything for the first week I had him.  Now he goes
                crazy when someone approaches the tank because he thinks he&#39;s going
                to get fed.  Ice Cube would hide when I stuck my hand in the tank
                to clean it while Dratini follows me around and even attacks
                my fingers.
              </p>
              <br />
              <p>
                Take a look at the photos below to see how much each of my bettas
                changed in less than a month after I brought them home.
              </p>
            </div>
          </div>
          <div className="belt__wrapper">
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/about/bettas/ictransformation.jpg')}
                alt="ice cube"
              />
            </div>
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/about/bettas/dratinibefore.jpg')}
                alt="dratini before"
              />
            </div>
            <div className="img__wrapper">
              <img
                src={prefixLink('../../img/about/bettas/dratiniafter.jpg')}
                alt="dratini after"
              />
            </div>
          </div>
          <div className="textbox">
            <div className="textbox--title">
              I hope you learned something about bettas!
            </div>
            <div className="textbox--content">
              If you&#39;re interested in learning more, as mentioned above you can visit <a href="https://www.reddit.com/r/bettafish/">/r/bettafish</a> or
              watch <a href="https://www.youtube.com/user/gardnerk9">LifeWithPets</a> and <a href="https://www.youtube.com/user/CreativePetKeeping">Creative Pet Keeping</a> on YouTube.
            </div>
          </div>
          <div className="page--nav">
            <a href="https://www.instagram.com/eatwithjam/">
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Previous
                  </div>
                  <div className="desc--content">
                    Follow my food adventures
                  </div>
                </div>
              </div>
            </a>
            <a href={prefixLink('/about/musicals/')}>
              <div className="button">
                <div className="desc">
                  <div className="desc--title">
                    Next
                  </div>
                  <div className="desc--content">
                    A list of the musicals I&#39;ve seen
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
