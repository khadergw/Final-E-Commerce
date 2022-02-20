import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useSelector } from 'react-redux';
import SigninPage from './pages/SigninPage';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
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
              <Link to="/">
                <img src="../images/logo9.png" />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav left">
                <li className="active">
                  <Link to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <a href="/#our_products">Products</a>
                </li>
                <li>
                  <a href="/#contact_us">Contact Us</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
              <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
                <li>
                  <Link to="/signin">Sign In</Link>
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
    {/* <Route path="/cart/:id" element={<CartPage />} /> */}
    <Route path="/cart" element={<CartPage />} />
    <Route path="/signin" element={<SigninPage />} />
    </Routes>
      </main>
      <footer className="page-footer font-small special-color-dark">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-fb mx-1">
                <i className="fa fa-facebook circle fa-2x"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-tw mx-1">
                <i className="fa fa-twitter circle fa-2x"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-gplus mx-1">
                <i className="fa fa-google-plus circle fa-2x"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-li mx-1">
                <i className="fa fa-pinterest circle fa-2x"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn-floating btn-dribbble mx-1">
                <i className="fa fa-dribbble circle fa-2x"> </i>
              </Link>
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