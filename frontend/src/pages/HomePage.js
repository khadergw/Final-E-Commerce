import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../components/Product";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function HomePage() {
  const [products, setProducts] = useState([]); //hook state to manage the products
  const [loading, setLoading] = useState(false);//loading hook
  const [error, setError] = useState(false);//error hook
  useEffect(() =>{
   const fetchData = async () =>{
     try{
      setLoading(true);
      const {data} = await axios.get('/api/products');//AJAX request
      setLoading(false);
      setProducts(data);
     } catch(err){
       setError(err.message);
       setLoading(false);
     }
   };//fetching the data t
   fetchData();
  },[]); //define a hook that applies when rendering the products that takes the dependencies in an array
  return (
 <div>
   {loading? <LoadingBox></LoadingBox>
   :
   error?<MessageBox variant="danger">{error}</MessageBox>
   :
   <div>
   <div id="bannerimage"></div>
    <br />
    <br />
    <div id="our_products">
      <h2>Our Products</h2>
    </div>
    <div className="container">
      <div className="row">
        {
          products.map(product => (
          <Product key={product._id} product={product}></Product>
          ))
        }
      </div>
   </div>
   <br/><br/>
    <div id="contact_us">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact Us
      </h2>
      <br />
      <br />
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>
      <br />
      <br />
      <div className="row">
        <div className="col-md-3 mb-4"></div>
        <div className="col-md-3 mb-4">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form" role="form">
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="form_name">
                            Firstname *
                          </label>{" "}
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Please enter your firstname *"
                            required="required"
                            data-error="Firstname is required."
                          />{" "}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="form_lastname">
                            Lastname *
                          </label>{" "}
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            className="form-control"
                            placeholder="Please enter your lastname *"
                            required="required"
                            data-error="Lastname is required."
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="form_email">Email *</label>{" "}
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                            required="required"
                            data-error="Valid email is required."
                          />{" "}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="form_need">
                            Please specify your need *
                          </label>{" "}
                          <select
                            id="form_need"
                            name="need"
                            className="form-control"
                            required="required"
                            data-error="Please specify your need."
                          >
                            <option value="">--Select Your Issue--</option>
                            <option>Request Invoice for order</option>
                            <option>Request order status</option>
                            <option>Haven't received your order yet</option>
                            <option>Other</option>
                          </select>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="form_message">
                            Message *
                          </label>{" "}
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>{" "}
                        </div>
                      </div>
                      <div className="col-md-12">
                        {" "}
                        <input
                          type="submit"
                          className="btn btn-send pt-2 btn-block "
                          value="Send Message"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Toronto, ON X1X 1X1, Canada</p>
              </li>
              <li>
                <i className="fa fa-phone mt-4 fa-2x"></i>
                <p>+ 1 234 567 890</p>
              </li>
              <li>
                <i className="fa fa-envelope mt-4 fa-2x"></i>
                <p>contact@itsource.com</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4"></div>
      </div>
    </div>
    </div>
  }
    </div>
   );
}