import React from 'react'

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-6">
            <h2>Get In Touch</h2>
            <p className="about">
              We are here to help and look forward to answering your <br />{" "}
              questions.
            </p>
            <div className="mb-3">
              <h6>contact@mypincoop.com</h6>
              <span>Email</span>
            </div>
            <div>
              <h6>
                2b Abimbola Okulaja Close Off Oladimeji alo Street <br /> Lekki
                Phase1
              </h6>
              <span>Address</span>
            </div>
            <div>
              <h6>+234 8156646666</h6>
              <span>Phone</span>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="card p-4 border-0 shadow">
              <div className="card-body">
                <h2>Send us a message</h2>
                <p className="about-p">Ask us anything you need</p>
              </div>
              <div className="form">
                <form action="">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control shadow-none"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Message"
                    />
                  </div>
                  <div className="mb-5">
                    <button type="submit" className="button w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact