import './index.css'
import {Component} from 'react'

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="bg-container">
          <div className="landingPage">
            <div>
              <img
                src="https://i.postimg.cc/HWwVYms6/TLN-logo-1.png"
                alt="web-site-Logo"
              />
              <hr />
            </div>
            <div className="opening-page-container">
              <h1>
                Learn French online and gain the confidence to speak fluently.
              </h1>
              <p>
                Learn about all the basics and wonders of the French Language by
                our renowned trainer <br />
                and get professional guidance with native style speaking skills.
              </p>
              <button className="request-brochure" type="button">
                Request Brochure
              </button>
            </div>
            <div className="under-Request-brochure">
              <div>
                <div className="course-details-container">
                  <img
                    src="https://i.postimg.cc/MpGtSdxp/student-1.png"
                    alt="student"
                  />
                  <div>
                    <p>5000+</p>
                    <p>Happy learners</p>
                  </div>
                </div>
                <div className="course-details-container">
                  <img
                    src="https://i.postimg.cc/MKYjzQmP/bulb-2.png"
                    alt="student"
                  />
                  <div>
                    <p>50000+</p>
                    <p>Hours of enlightment</p>
                  </div>
                </div>
                <div className="course-details-container">
                  <img
                    src="https://i.postimg.cc/PqJ6WhqH/training-1.png"
                    alt="alpha mentors"
                  />
                  <div>
                    <p>150+</p>
                    <p>Alpha mentors</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/15T4mrNK/image-1.png"
                  alt="Bonjour"
                  className="banjour-image"
                />
              </div>
            </div>
          </div>
          <div className="black-container">
            <div>
              <p className="language-stages">
                Gain Mastery on all levels of CEFR (The Common European
                Framework of Reference for Languages:
                <br /> Learning, teaching, assessment): A1, A2, B1, B2, C1, C2
                of the French Language
              </p>
            </div>
            <div className="images-cards">
              <img
                src="https://i.postimg.cc/zGhDJLWb/image-13-1.png"
                alt="cards"
              />
              <img
                src="https://i.postimg.cc/q7X3vDn3/image-12.png"
                alt="card2"
              />
            </div>
            <div className="button-online">
              <button className="button-french" type="button">
                Start Learning French Online
              </button>
            </div>
          </div>
          <div className="Efil-Container">
            <h1 className="french-worth">Is learning French worth it?</h1>
            <div className="eiffel-container">
              <img
                alt="eiffel-tower"
                src="https://i.postimg.cc/J0P3zryv/All-languages-FRENCH-1.png"
              />
              <p className="eiffel-para">
                Learning any language is worth your time! Whether it’s French or
                another language, learning a <br /> language allows you to
                connect with people from all over the world, experience
                different cultures and <br /> help with a bit of brain training
                all at the same time! We’re living in an increasingly globalised
                world, so <br /> learning another language like French can help
                you to boost your career and the likelihood of finding a <br />{' '}
                new job, make travelling much easier and it opens you up to a
                world of new entertainment, like music,
                <br /> art, books and films. Trust us, it's definitely worth it.
              </p>
              <p className="eiffel-para-below">
                But outside of that, there are several more top reasons to learn
                French:
              </p>
              <ol type="1" className="order-list-container">
                <li className="list-item">
                  French is the official language of 29 countries. Open up those
                  travel plans, y’all!
                </li>
                <li className="list-item">
                  Learn about new cultures from around the globe: whether it’s
                  cooking, fashion, theatre, arts or architecture, French offers
                  access to a world of new interests.
                </li>
                <li className="list-item">
                  French is a ‘romance’ language. That means it’ll get you
                  closer to learning other languages like Spanish, Italian and
                  Portuguese. Bonus!
                </li>
                <li className="list-item">
                  When someone asks “Does anyone here speak French?” in any
                  given scenario, you can be the hero they never knew they
                  needed.
                </li>
              </ol>
            </div>
          </div>
          <div className="Prices-container">
            <h1>Our French Course Prices</h1>

            <div className="learning-type-container">
              <img
                src="https://i.postimg.cc/jj4WzsKj/Rectangle-23.png"
                alt="learning-type"
              />
            </div>
            <img
              src="https://i.postimg.cc/L6knd9Y3/image-14.png"
              alt="prices-list"
            />
          </div>
        </div>
      </>
    )
  }
}
export default LandingPage
