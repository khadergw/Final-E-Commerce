//import data from '../data';
import Rating from '../components/Rating';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { addToCart }  from '../actions/cartActions';

export default function ProductPage(props) {
  const params = useParams();
  //console.log(params); // params are showing the id
 // console.log(props) // props are empty
  //find the product based on the id
 
  // const product = data.products.find((x) => x._id.toString() === params.id); 
  // if (!product) {
  //   return <div>Product Not Found!</div>;
  // }
  const dispatch = useDispatch();
  const productId = params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // const navigate=useNavigate();


useEffect(() => {
  dispatch(detailsProduct(productId));
}, [dispatch, productId]);
const addToCartHandler = () => {
  dispatch(addToCart(productId, qty))
  // navigate(`/cart/${productId}?qty=${qty}`); 
};
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="container-fluid product-detail">
          <div className="row center">
            <div className="col-md-6">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-md-6">
              <div className="row center">
                <ul className="list">
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </li>
                  <li className="price">Price : ${product.price}</li>
                  <li className="description">
                    Description:
                    <p className="desc">{product.description}</p>
                  </li>
                </ul>
              </div>
              <div className="row center">
                <div className="card card-body product-cart">
                  <ul className="list">
                    <li>
                      <div className="row">
                        <div className="price-title">Price: </div>
                        <div className="cost"> ${product.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="status-title">Status: </div>
                        <div className="status">
                          {product.countInStock > 0 ? (
                            <span className="success">In Stock </span>
                          ) : (
                            <span className="error">Out Of Stock </span>
                          )}
                        </div>
                      </div>
                    </li>
                    {product.countInStock > 0 && (
                      <>
                        <li>
                          <div className="row">
                            <div>Qty</div>
                            <div>
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            onClick={addToCartHandler}
                            className="primary block"
                          >
                            ADD TO CART
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Back to result</Link>
        </div>
      )}
    </div>
  );
}
