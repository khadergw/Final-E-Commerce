import { useParams, useLocation, Link, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { createOrder } from '../actions/orderActions';
import NavBar from '../components/NavBar';


export default function CartPage(props) {
  const params = useParams();
  const productId = params.id;
  // const qty = props.location.search
  //   ? Number(props.location.search.split('=')[1])
  //   : 1;
  const [searchParams, setSearchParams] = useSearchParams();
  const qtyInUrl = searchParams.get("qty");
// const {search} =useLocation();
// const qtyInUrl = new URLSearchParams(search).get('qty');
const qty = qtyInUrl?Number(qtyInUrl):1;
const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
const navigate = useNavigate();
const dispatch = useDispatch();
useEffect(() => {
  if (productId) {
    dispatch(addToCart(productId, qty));
  }
}, [dispatch, productId, qty]);
const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id));
};

const userSignin = useSelector((state) => state.userSignin);
const { userInfo} = userSignin;
console.log(userInfo);
const checkoutHandler = () => {
  if (userInfo){
    navigate("/shipping");
  }else{
  //props.history.push('/signin?redirect=shipping');
  navigate("/signin?redirect=shipping"); 
  }
};
return (   
  <div>
  <NavBar></NavBar>
  <div className="row top">
  <div className="col-md-8 mb-4 title-home">
    <h2>Shopping Cart</h2>
    <br/><br/>
    {cartItems.length === 0 || (!userInfo) ? (
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
              <div className="min-30 col-md-2 mb-4 item-name">
                <a href={`/product/${item.product}`}>{item.name}</a>
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
      <div className="card card-body cart-item cart-card">
        <ul>
          <li>
            <h2 className="cart-subtotal"> 
            {
  userInfo && 
    <>
      Subtotal ({cartItems.reduce((a,c) => Number(a) + Number(c.qty), 0)}) : $
      {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
    </>
}
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
    </div> <br/><br/>
 <div>  <button className='return'><a href="/">Add more</a></button></div> 
  </div>
  );
} 
