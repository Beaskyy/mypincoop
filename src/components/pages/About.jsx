import about from '../../assets/img/about.jpg'
const About = () => {
  return (
    <>
      <section className='py-5' id='about-pincoop'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="rental">
                We're making it possible <br /> to co/own real estate online
              </h1>
              <p className="">
                Seat back and relax while we take care of everything. We source,
                and analysis, purchase and <br /> manage the process of buying,
                renting and selling <br /> rental properties.
              </p>
            </div>
            <div className="col-md-12">
              <img
                src={about}
                className="img-fluid about-img"
                alt="about-img"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div id="about-us">
                <h2 className="info">Easy</h2>
                <p className="details">
                  Build your rental property portfolio with ease
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div id="about-us">
                <h2 className="info">Affordable</h2>
                <p className="details">
                  Co-ownership for everyone to get involved
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div id="about-us">
                <h2 className="info">Transparent</h2>
                <p className="details">Market-driven analysis and pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our story started as a service</h2>
              <p className="about-p">
                Squareroof wants to digitally transform the experience and
                process of buying, managing, and selling rental properties,
                through our end-to-end data-driven platform.
              </p>
              <p className="about-p">
                We remove the lengthy paperwork, legal complexity, and numerous
                barriers to investing in real estate to make it affordable for
                everyone.
              </p>
            </div>
          </div>
          <div className="row">
            <h2>Over 15 years of combined experience</h2>
            <p className="about-p">
              We engage the services of property valuation professionals,
              conduct due diligence, and property market analysis to help buyers
              and sellers make informed decisions when shopping for real estate
              investment opportunities.
            </p>
            <p className="about-p">
              Our operational experience in technology innovation and real
              estate investment spans over the years; guided by the principles
              of:
            </p>
            <ul>
              <li>Fair Dealings</li>
              <li>Customer Satisfaction</li>
              <li>Business Integrity</li>
              <li>Continuous Innovation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About