import logo from '../assets/img/pincoop-logo.png'
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      <section className="py-5" id="estate">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-white">
                Bringing real estate <br /> closer to you
              </h2>
              <p className="text-secondary">
                Join our exclusive community to learn more about real estate
                cooperative ownership.
              </p>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-7 mt-2">
                      <input
                        type="email"
                        className="text-field-white"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-md-2 mt-2">
                      <button className="submit-button-white">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} className="img-fluid mb-3" width="200" alt="" />
              <p>
                Pincoop simplifies the real Estate investment market, allowing
                co-own and earn for life.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <h6 className="footer-head">Resources</h6>
                  <p>
                    <Link to="/about" className="footer-links">
                      About us
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="footer-links">
                      Guides
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="footer-links">
                      FAQs
                    </Link>
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-head">Company</h6>
                  <p>
                    <Link to="#" className="footer-links">
                      Jop Openings
                    </Link>
                  </p>
                  <p>
                    <Link to="/about" className="footer-links">
                      About Us
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="footer-links">
                      Pincoop Groups
                    </Link>
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-head">Contact Us</h6>
                  <p>
                    <Link to="#" className="footer-links">
                      Location
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="footer-links">
                      Send a message
                    </Link>
                  </p>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-head">Social Media</h6>
                  <p>
                    <Link to="#" className="footer-links">
                      Instagram
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="footer-links">
                      Twitter
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="footer-links">
                      Facebook
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer