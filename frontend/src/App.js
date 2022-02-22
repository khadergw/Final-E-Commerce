import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from './actions/userActions';
import ShippingAddressPage from './pages/ShippingAddressPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';



function App() {

  return (
    <BrowserRouter>
    <div className="grid-container">


      <main>

      <Routes>
     
    <Route exact path="/"  element={<HomePage />}  /> 
    <Route path="/product/:id" element={<ProductPage />} />  
    {/* <Route path="/cart/:id" element={<CartPage />} /> */}
    <Route path="/cart" element={<CartPage />} />
    <Route path="/signin" element={<SigninPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/shipping" element={<ShippingAddressPage />} />
    <Route path="/payment" element={<PaymentMethodPage />} />
    <Route path="/placeorder" element={<PlaceOrderPage />} />
    <Route path="/order/:id" element={<OrderPage />} />
  
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