import rent from '../../assets/img/real-estate.jpg'
import home from '../../assets/img/home.jpg'
import track from '../../assets/img/track.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row hero-section">
            <div className="col-md-7">
              <h1 className="rental">
                Own your share of rental <br />
                properties in <span className="">seconds</span>
              </h1>
              <p className="hero-p">
                Pincoop simplifies the real Estate investment market, <br />{" "}
                allowing co-own and earn for life.
              </p>
              <button className="button">Browse Properties</button>
            </div>
            <div className="col-md-5" id="pincoop-hero">
              <figure className="hero-banner img-holder">
                <img src={home} alt="home-img" className="img-cover" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="rental">Ways to invest on Pincoop</h1>
              <p className="hero-p">
                With Pincoop, investments are made simple, there are 3 major
                ways to invest with more coming
              </p>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-4">
              <div>
                <span className="buy">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </span>
              </div>
              <h3 className="mt-5 mb-4">Co-lease</h3>
              <p>Enjoy capital gains as the property value appreciates</p>
            </div>
            <div className="col-md-4">
              <div>
                <span className="buy">
                  <i className="fa-solid fa-user-plus"></i>
                </span>
              </div>
              <h3 className="mt-5 mb-4">Co-own</h3>
              <p>Earn your share of rental income while you hold</p>
            </div>
            <div className="col-md-4">
              <div>
                <span className="buy">
                  <i class="fa-solid fa-users"></i>
                </span>
              </div>
              <h3 className="mt-5 mb-4">Co-sponsor</h3>
              <p>Receive better yield on your home savings target</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <button className="button">Sign up</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-5">
              <h1 className="rental">
                Own your share of rental properties in{" "}
                <span className="">seconds</span>
              </h1>
              <p className="hero-p">
                My makes it easy and affordable for you to own your share of
                professionally managed rental properties from anywhere.
              </p>
              <button className="button">Browse Properties</button>
            </div>
            <div className="col-md-6 my-5">
              <img
                src="https://propertydome.com/wp-content/uploads/2020/12/Propertydome_Bluewater.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={rent}
                className="img-fluid mt-4 rounded"
                alt="real-estate"
              />
            </div>
            <div className="col-md-6">
              <h1 className="rental">
                <span>A cooperative</span> <br /> way to build your real estate
                portfolio
              </h1>
              <p className="hero-p">
                Join thousands of our happy members to co-own properties. Own
                what you can afford in any land or property stock.
              </p>
              <Link to="/about" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="rental">Real estate at your fingertips</h1>
              <p className="hero-p">
                Enjoy rental cash flow and value appreciation from your share
              </p>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-3">
              <div>
                <span className="buy">
                  <i className="fa-solid fa-hand-holding"></i>
                </span>
              </div>
              <h4 className="mt-5 mb-4">Handpicked Properties</h4>
              <p>
                Choose from a well-diversified portfolio of vetted properties
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <span className="buy">
                  <i className="fa-solid fa-shield"></i>
                </span>
              </div>
              <h4 className="mt-5 mb-4">Own Your Share</h4>
              <p>Make the minimum purchase you can afford to own your share</p>
            </div>
            <div className="col-md-3">
              <div>
                <span className="buy">
                  <i className="fa-solid fa-rotate"></i>
                </span>
              </div>
              <h3 className="mt-5 mb-4">Receive Cash flow</h3>
              <p>
                Receive your share of rental income from each property you own
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <span className="buy">
                  <i className="fa-solid fa-money-bill-trend-up"></i>
                </span>
              </div>
              <h3 className="mt-5 mb-4">Lifetime Income</h3>
              <p>Enjoy a lifetime of passive income from what you own</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 px-5 my-5">
              <img
                src={track}
                className="img-fluid rounded"
                alt="real-estate"
              />
            </div>
            <div className="col-md-5 mt-5">
              <h1 className="rental">
                Track and manage what you own <span className="">easily</span>
              </h1>
              <p className="hero-p">
                An easy to use platform to track and manage your share of rental
                properties protected by institutional partners that provide:
              </p>
              <p className="property mb-4">
                <span className="track">
                  <i className="fa-solid fa-check"></i>
                </span>{" "}
                Property Valuation
              </p>
              <p className="property mb-4">
                <span className="track">
                  <i className="fa-solid fa-check"></i>
                </span>{" "}
                Property Management
              </p>
              <p className="property">
                <span className="track">
                  <i className="fa-solid fa-check"></i>
                </span>{" "}
                Co-ownership Trustee
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="rental">What clients say about us</h1>
              <p className="hero-p">
                With My, we are making it possible to own and build longterm
                wealth through rental properties
              </p>
              <Link to="/about" className="button">
                Learn More
              </Link>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 my-3 testimony">
                  <div className="testimonial">
                    <p className="hero-p">
                      Before My, real estate was unattainable for me. I love the
                      idea of being able to buy little by little according to my
                      pocket
                    </p>
                    <h5 className="name">
                      <span className="test">
                        <i className="fa-solid fa-quote-left"></i>
                      </span>{" "}
                      Olakunle Ojo
                    </h5>
                    <p className="role">Financial Accountant</p>
                  </div>
                </div>
                <div className="col-md-6 my-3 testimony">
                  <div className="testimonial">
                    <p className="hero-p">
                      Before My, real estate was unattainable for me. I love the
                      idea of being able to buy little by little according to my
                      pocket
                    </p>
                    <h5 className="name">
                      <span className="test">
                        <i className="fa-solid fa-quote-left"></i>
                      </span>{" "}
                      Olakunle Ojo
                    </h5>
                    <p className="role">Financial Accountant</p>
                  </div>
                </div>
                <div className="col-md-6 my-3 testimony">
                  <div className="testimonial">
                    <p className="hero-p">
                      Before My, real estate was unattainable for me. I love the
                      idea of being able to buy little by little according to my
                      pocket
                    </p>
                    <h5 className="name">
                      <span className="test">
                        <i className="fa-solid fa-quote-left"></i>
                      </span>{" "}
                      Olakunle Ojo
                    </h5>
                    <p className="role">Financial Accountant</p>
                  </div>
                </div>
                <div className="col-md-6 my-3 testimony">
                  <div className="testimonial">
                    <p className="hero-p">
                      Before My, real estate was unattainable for me. I love the
                      idea of being able to buy little by little according to my
                      pocket
                    </p>
                    <h5 className="name">
                      <span className="test">
                        <i className="fa-solid fa-quote-left"></i>
                      </span>{" "}
                      Olakunle Ojo
                    </h5>
                    <p className="role">Financial Accountant</p>
                  </div>
                </div>
                <div className="col-md-6 my-3 testimony">
                  <div className="testimonial">
                    <p className="hero-p">
                      Before My, real estate was unattainable for me. I love the
                      idea of being able to buy little by little according to my
                      pocket
                    </p>
                    <h5 className="name">
                      <span className="test">
                        <i className="fa-solid fa-quote-left"></i>
                      </span>{" "}
                      Olakunle Ojo
                    </h5>
                    <p className="role">Financial Accountant</p>
                  </div>
                </div>
                <div className="col-md-6 my-3 testimony">
                  <div className="testimonial">
                    <p className="hero-p">
                      Before My, real estate was unattainable for me. I love the
                      idea of being able to buy little by little according to my
                      pocket
                    </p>
                    <h5 className="name">
                      <span className="test">
                        <i className="fa-solid fa-quote-left"></i>
                      </span>{" "}
                      Olakunle Ojo
                    </h5>
                    <p className="role">Financial Accountant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home