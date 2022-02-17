import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <BrowserRouter>
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
                <img src="../images/logo9.png" />
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
                  <a href="/#our_products">Products</a>
                </li>
                <li>
                  <a href="/#contact_us">Contact Us</a>
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

      <Routes>
    <Route exact path="/"  element={<HomePage />}  /> 
    <Route path="/product/:id" element={<ProductPage />} />    
    </Routes>


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
    </BrowserRouter>
  );
}

export default App;