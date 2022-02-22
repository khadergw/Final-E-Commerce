//import data from '../data';
import Rating from '../components/Rating';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { addToCart }  from '../actions/cartActions';
import NavBar from '../components/NavBar';

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
  const navigate=useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
const { userInfo} = userSignin;
 
useEffect(() => {
  dispatch(detailsProduct(productId));
}, [dispatch, productId]);
const addToCartHandler = () => {
  if(userInfo){
  dispatch(addToCart(productId, qty))
  window.alert('Item(s) added to cart')
  //  navigate(`/cart?id=${productId}&qty=${qty}`);
  } else {
  navigate(`/signin`);
  }
};

  return (
    <div>
      <NavBar></NavBar>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (

    <div className="container-fluid product-detail">
    <div className="row center">
    <div className="col-md-2"></div>

      <div className="col-md-4">
      <img className="large" src={product.image} alt={product.name}></img>
      </div>
      <div className="col-md-4">
        <div className="row center">

        <ul className="list">
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
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
          <br/>
              <ul className="list">
                <li>
                  <div className="row">
                    <div className="col-md-4 price-title">Price: </div>
                    <div className="cost col-md-4"> ${product.price}</div>
                    <div className="col-md-4"></div>
                  </div>
                </li><br/>
                <li>
                  <div className="row">
                    <div className="status-title col-md-4">Status: </div>
                    <div className="status col-md-4"> 
                      {product.countInStock>0? <span className="success">In Stock </span>:
                      <span className="error">Out Of Stock </span>
                      }
                    </div>
                    <div className="col-md-4"></div>

                  </div>
                </li><br/>
                {
                  product.countInStock > 0 && (
                    <>
                    <li>
                     < div className="row">
                       <div className='qty'>Qty</div>
                       <div>
                         <select value={qty} onChange={e => setQty(e.target.value)}>
                           {
                             [...Array(product.countInStock).keys()].map((x) => (
                               <option key={x+1}value={x+1}>{x+1}</option>
                             ))
                           }
                         </select>
                       </div>
                     </div>
                    </li>
                         <li>
                    <button onClick={addToCartHandler} className="primary block">ADD TO CART</button>
                  </li>
                    </>
               
                  )
                }
             
              </ul>
            </div>
        </div>
      </div>
      <div className="col-md-2"></div>

    </div><br/><br/>
    <button className='return'><a href="/">Back to products</a></button>
  </div>
    )}
    </div>
  
  );
}