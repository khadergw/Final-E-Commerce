import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder, payOrder} from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import NavBar from '../components/NavBar';

export default function OrderScreen(props) {
  const params = useParams();
  const orderId = params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  return (
    <div>
    <NavBar></NavBar>

   {loading? <LoadingBox></LoadingBox>
   :
   error?<MessageBox variant="danger">{error}</MessageBox>
   :
    <div>
    <div className='title-order'>  <h2>Order # {order._id}</h2> </div>
      <div className="row top">
        <div className="col-md-8 mb-4">
          <ul>
            <li>
              <div className="card card-body product-cart">
              <h3>Shipping Info</h3><br/>
                <p className='font-order'>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br /><br/>
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body product-cart">
              <h3>Payment</h3><br/>
                <p className='font-order'>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body product-cart">
              <h3>Order Items</h3><br/>
                <ul>
                  {order.orderItems.map((item) => (
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
        <div className="col-md-4 mb-4 font-order">
          <div className="card card-body product-cart">
            <ul>
              <li>
              <h3>Order Summary</h3><br/>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order' >Items</div>
                  <div className='col-md-6 font-order'> ${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>Shipping</div>
                  <div className='col-md-6 font-order'>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>Tax</div>
                  <div className='col-md-6 font-order'>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className='col-md-6 font-order'>
                    <strong> Order Total</strong>
                  </div>
                  <div className='col-md-6 font-order'>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div> <br/>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}

                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
}
    </div>
  );
}