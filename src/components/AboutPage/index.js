import './index.css'
import {Chrono} from 'react-chrono'

const AboutPage = () => (
  <>
    <div className="bg-container2">
      <div className="Logo-container">
        <img
          src="https://i.postimg.cc/HWwVYms6/TLN-logo-1.png"
          alt="web-site-Logo"
        />
        <hr />
      </div>

      <div className="overall-container">
        <div className="about-description">
          <div className="about-description-container">
            <h1 className="description-head">
              Learn More Than <br />
              Just a Language
            </h1>
            <p className="description-para">
              Whether learning a foreign language is all about learning <br />
              new cultures or obtaining vast career opportunities, we’re <br />
              your go-to Language Academy!
            </p>
          </div>
          <div>
            <img
              src="https://i.postimg.cc/T38FFQTW/image-1-1.png"
              alt="banjour"
              className="banjour-image"
            />
          </div>
        </div>

        <div className="course-stats-container">
          <div className="course-details-container">
            <img
              src="https://i.postimg.cc/MpGtSdxp/student-1.png"
              alt="student"
            />
            <div className="logo-description">
              <p>5000+</p>
              <p>Happy learners</p>
            </div>
          </div>
          <div className="course-details-container">
            <img src="https://i.postimg.cc/MKYjzQmP/bulb-2.png" alt="student" />
            <div className="logo-description">
              <p>50000+</p>
              <p>Hours of enlightment</p>
            </div>
          </div>
          <div className="course-details-container">
            <img
              src="https://i.postimg.cc/PqJ6WhqH/training-1.png"
              alt="alpha mentors"
            />
            <div className="logo-description">
              <p>150+</p>
              <p>Alpha mentors</p>
            </div>
          </div>
        </div>

        <div>
          <h1>How did we start?</h1>
        </div>

        <div className="chrono-container">
          <Chrono
            mode="VERTICAL"
            theme={{
              primary: '#ADF4D4',
              secondary: '#58D69D',
              cardBgColor: 'transparent',
              cardForeColor: 'violet',
              titleColor: 'red',
            }}
          >
            <div>
              <h1>Once upon an Idea</h1>
              <p>
                On a breezy afternoon of November 2020, it all started with
                three friends, Pinnac Yeddy, Siddhi Chokhani, and <br />
                Shubham Pille coming together because of their love for
                languages and entrepreneurship. Their main purpose
                <br />
                was to improve the education quality and critical pedagogy in
                students learning a foreign language.
                <br />
                They wanted to bring the fun back into innovative learning!
              </p>
            </div>
            <div>
              <h1>Our first of many happy learners</h1>
              <p>
                We went global at a very early stage! Our first happy learner to
                board our learning train was Mr. Anant, a 70-year-old man from
                Qatar who had a passion to learn French. From then on, there was
                no turning back! Today, we have more than 5000 students learning
                with us!
              </p>
            </div>
            <div>
              <h1>All aboard the language train!</h1>
              <p>
                In less than six months, we were able to bring more than [no.]
                students closer to learning their dream language! With a
                staggering increase of [no.] in classes, we have made ourselves
                the most colossal family of language learners in the city!
              </p>
            </div>
            <div>
              <h1>Mumbai Dreams</h1>
              <p>
                From remote working to renting an office, to buying our very own
                office in Chembur, Mumbai, we have come a long way! We have made
                massive breakthroughs in the EdTech Industry. Our team of 50+
                people is taking great strides to make a name for ourself!
              </p>
            </div>
            <div>
              <h1>Expanding our Reach</h1>
              <p>
                We have come a long way! But with every mile we reach, we yearn
                to go further! <br />
              </p>
            </div>
          </Chrono>
        </div>

        <div className="motos-container">
          <h1>Our 3 U’s</h1>
          <ul className="type-unorder-list">
            <li>
              <div className="numbering-container">
                <div className="circle-container">
                  <p>1</p>
                </div>
                <div>
                  <p className="number-para">
                    French is the official language of 29 countries. Open up
                    those travel plans, y’all!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="numbering-container">
                <div className="circle-container">
                  <p>2</p>
                </div>
                <div>
                  <p className="number-para">
                    Learn about new cultures from around the globe: whether it’s
                    cooking, fashion, theatre, arts or architecture
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="numbering-container">
                <div className="circle-container">
                  <p>3</p>
                </div>
                <div>
                  <p className="number-para">
                    French is a ‘romance’ language. That means it’ll get you
                    closer to learning other languages like Spanish, Italian and
                    Portuguese.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="numbering-container">
                <div className="circle-container">
                  <p>4</p>
                </div>
                <div>
                  <p className="number-para">
                    When someone asks “Does anyone here speak French?” in any
                    given scenario, you can be the hero they never knew they
                    needed.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default AboutPage
