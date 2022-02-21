export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={`col-md-3 mb-4 ${props.step1 ? "active" : ""}`}>
        Sign-In
      </div>
      <div className={`col-md-3 mb-4 ${props.step2 ? "active" : ""}`}>
        Shipping
      </div>
      <div className={`col-md-3 mb-4 ${props.step3 ? "active" : ""}`}>
        Payment
      </div>
      <div className={`col-md-3 mb-4 ${props.step4 ? "active" : ""}`}>
        Place Order
      </div>
    </div>
  );
}
