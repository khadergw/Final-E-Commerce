import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';


export default function NavBar(){

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutHandler = () => {
    dispatch(signout());
    navigate("/");
  };
  return(
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
                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/signin" onClick={signoutHandler}>
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
  );
}; 