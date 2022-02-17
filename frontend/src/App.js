import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/">
                <img src="images/logo9.png" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav left">
                <li className="active">
                  <a href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#our_products">Products</a>
                </li>
                <li>
                  <a href="#contact_us">Contact Us</a>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/cart">Cart</a>
                </li>
                <li>
                  <a href="/signin">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div id="bannerimage"></div>
        <br />
        <br />

        <div id="our_products">
          <h2>Our Products</h2>

        </div>
        <div className="container">
          <div className="row">
            {
              data.products.map(product => (

                <div key={product._id} className="col-md-4 mb-4">
                <div className="card item">
                  <a href={`/product/${product._id}`}>
                    <img className="medium test" src={product.image} alt={product.name} />
                  </a>
                  <div className="card-body">
                  <a href={`/product/${product._id}`}>
                      <h2 className="product-name">{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">${product.price}</div>
                  </div>
                </div>
              </div>

              ))
            }

          </div>

       </div>
       <br/><br/>

        <div id="contact_us">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <br />
          <br />
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 mb-4"></div>

            <div className="col-md-3 mb-4">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                  <div className="container">
                    <form id="contact-form" role="form">
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              {" "}
                              <label htmlFor="form_name">
                                Firstname *
                              </label>{" "}
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Please enter your firstname *"
                                required="required"
                                data-error="Firstname is required."
                              />{" "}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              {" "}
                              <label htmlFor="form_lastname">
                                Lastname *
                              </label>{" "}
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                className="form-control"
                                placeholder="Please enter your lastname *"
                                required="required"
                                data-error="Lastname is required."
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              {" "}
                              <label htmlFor="form_email">Email *</label>{" "}
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Please enter your email *"
                                required="required"
                                data-error="Valid email is required."
                              />{" "}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              {" "}
                              <label htmlFor="form_need">
                                Please specify your need *
                              </label>{" "}
                              <select
                                id="form_need"
                                name="need"
                                className="form-control"
                                required="required"
                                data-error="Please specify your need."
                              >
                                <option value="">--Select Your Issue--</option>
                                <option>Request Invoice for order</option>
                                <option>Request order status</option>
                                <option>Haven't received your order yet</option>
                                <option>Other</option>
                              </select>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              {" "}
                              <label htmlFor="form_message">
                                Message *
                              </label>{" "}
                              <textarea
                                id="form_message"
                                name="message"
                                className="form-control"
                                placeholder="Write your message here."
                                rows="4"
                                required="required"
                                data-error="Please, leave us a message."
                              ></textarea>{" "}
                            </div>
                          </div>
                          <div className="col-md-12">
                            {" "}
                            <input
                              type="submit"
                              className="btn btn-send pt-2 btn-block "
                              value="Send Message"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-md-3 mb-4 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Toronto, ON X1X 1X1, Canada</p>
                  </li>

                  <li>
                    <i className="fa fa-phone mt-4 fa-2x"></i>
                    <p>+ 1 234 567 890</p>
                  </li>

                  <li>
                    <i className="fa fa-envelope mt-4 fa-2x"></i>
                    <p>contact@itsource.com</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-4"></div>
          </div>
        </div>
      </main>

      <footer className="page-footer font-small special-color-dark">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-fb mx-1">
                <i className="fa fa-facebook circle fa-2x"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-tw mx-1">
                <i className="fa fa-twitter circle fa-2x"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-gplus mx-1">
                <i className="fa fa-google-plus circle fa-2x"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-li mx-1">
                <i className="fa fa-pinterest circle fa-2x"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-dribbble mx-1">
                <i className="fa fa-dribbble circle fa-2x"> </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;