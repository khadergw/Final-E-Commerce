import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import NavBar from '../components/NavBar';

export default function PaymentMethodPage(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();
  if (!shippingAddress.address) {
    // props.history.push('/shipping');
    navigate("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const submitHandler = (e) => {
    if (userInfo) {
      navigate("/placeorder");
      e.preventDefault();
      dispatch(savePaymentMethod(paymentMethod));
      //props.history.push('/placeorder');
    } else {
      //props.history.push('/signin?redirect=shipping');
      navigate("/signin?redirect=placeorder");
    }
  };
  return (
    <div>
            <NavBar></NavBar>
      <br />
      <br />
      <div className="row">
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
      </div>
      <div className="row">
        <form className="signin" onSubmit={submitHandler}>
        <div className='title-home'>
          <h2>Payment Method</h2>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
