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
            <div>
              <img
                src="https://i.postimg.cc/zGhDJLWb/image-13-1.png"
                alt="cards"
              />
              <img
                src="https://i.postimg.cc/q7X3vDn3/image-12.png"
                alt="card2"
              />
            </div>
            <div>
              <p>wait</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default LandingPage
