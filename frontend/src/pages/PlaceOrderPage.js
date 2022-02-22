import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!cart.paymentMethod) {
   // props.history.push('/payment');
    navigate("/payment"); 
  }
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const userSignin = useSelector((state) => state.userSignin);
const { userInfo} = userSignin;
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler = () => {
    if (userInfo){
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    navigate("/placeorder");
    // TODO: dispatch place order action
    // if (userInfo){
    //   navigate("/placeorder");
    }else{
    // //props.history.push('/signin?redirect=shipping');
    navigate("/signin?redirect=placeorder"); 
    }
  };
  useEffect(() => {
    if (success) {
     // props.history.push(`/order/${order._id}`);
     navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, navigate,order, props.history, success]);
  return (
    <div>
      <NavBar></NavBar>
      <br/><br/>
      <div className='row'>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      </div>
      <br/><br/>
      {/* <div className='title-home'>
        <h2>Order Summary</h2><br/>
      </div> */}
      <div className="row top">
        <div className="col-md-8 mb-4">
          <ul>
            <li>
              <div className="card card-body product-cart">
                <h3>Shipping Info</h3><br/>
                <p className='font-order'>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br /><br/>
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body product-cart">
                <h3>Payment</h3><br/>
                <p className='font-order'>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body product-cart">
              <h3>Order Items</h3><br/>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div className='col-md-4'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30 col-md-4 font-order">
                          <a href={`/product/${item.product}`}>
                            {item.name}
                          </a>
                        </div>

                        <div className='col-md-4 font-order'>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card card-body product-cart">
            <ul>
              <li>
              <h3>Order Summary</h3><br/>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>Items</div>
                  <div className='col-md-6 font-order'>${cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>Shipping</div>
                  <div className='col-md-6 font-order'>${cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>Tax</div>
                  <div className='col-md-6 font-order'>${cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>
                    <strong> Order Total</strong>
                  </div>
                  <div className='col-md-6 font-order'>
                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li><br/>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block font-order"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}