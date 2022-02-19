
import { useParams, useLocation, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartPage(props) {
  const params = useParams();
  const productId = params.id;
  const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
//const navigate=useNavigate();
  // const qty = props.location.search
  //   ? Number(props.location.search.split('=')[1])
  //   : 1;
const {search} =useLocation();
const qtyInUrl = new URLSearchParams(search).get('qty');
const qty = qtyInUrl?Number(qtyInUrl):1;

const dispatch = useDispatch();
useEffect(() => {
  if (productId) {
    dispatch(addToCart(productId, qty));
  }
}, [dispatch, productId, qty]);

const removeFromCartHandler = (id) => {
  // delete action
};

const checkoutHandler = () => {
  props.history.push('/signin?redirect=shipping');
 //navigate('/signin?redirect=shipping');

};

  return (    
    <div className="row top">
    <div className="col-md-8 mb-4">
      <h1>Shopping Cart</h1>
      <br/><br/>
      {cartItems.length === 0 ? (
        <MessageBox>
          Cart is empty. <Link to="/#our_products">See Our Products</Link>
        </MessageBox>
      ) : (
        <ul>
          {cartItems.map((item) => (
              <li key={item.product} className="cart-list">
              <div className="row">
                <div className ="col-md-2 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="small"
                  ></img>
                </div>
                <div className="min-30 col-md-2 mb-4">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
                <div className ="col-md-2 mb-4"></div>
                <div className ="col-md-2 mb-4">
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className ="col-md-2 mb-4">${item.price}</div>
                <div className ="col-md-2 mb-4">
                  <button
                    type="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="col-md-4 mb-4">
      <div className="card card-body item cart-card">
        <ul>
          <li>
            <h2 className="cart-subtotal">
              Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h2>
          </li>
          <li>
            <button
              type="button"
              onClick={checkoutHandler}
              className="primary block checkout"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
} 