import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "./actions/userActions";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import PlaceOrderPage from './pages/PlaceOrderPage';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import PaymentMethodPage from './pages/PaymentMethodPage';

function App() {
  const navigate = useNavigate;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    navigate("/");
  };
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
                  <li>
                    <Link to="/cart">
                      Cart
                      {cartItems.length > 0 && userInfo && (
                        <span className="badge">{cartItems.length}</span>
                      )}
                    </Link>
                  </li>
                  <li>
                    {/* <Link to="/signin">Sign In</Link> */}
                    {userInfo ? (
                      <div className="dropdown">
                        <Link to="#">
                          {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="#signout" onClick={signoutHandler}>
                              Sign Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Link to="/signin">Sign In</Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            {/* <Route path="/cart/:id" element={<CartPage />} /> */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/shipping" element={<ShippingAddressPage />} />
            <Route path="/payment" element={<PaymentMethodPage />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
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
