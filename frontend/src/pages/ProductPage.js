import data from '../data';
import Rating from '../components/Rating';
import { useParams, Link } from 'react-router-dom';

export default function ProductPage(props) {
  const params = useParams();
  //console.log(params); // params are showing the id
 // console.log(props) // props are empty
  //find the product based on the id
  const product = data.products.find((x) => x._id.toString() === params.id); 
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (

    <div className="container-fluid product-detail">
    <div className="row center">
      <div className="col-md-6">
      <img className="large" src={product.image} alt={product.name}></img>
      </div>
      <div className="col-md-6">
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
                      {product.countInStock>0? <span className="success">In Stock </span>:
                      <span className="error">Out Of Stock </span>
                      }
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">ADD TO CART</button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <Link to="/">Back to result</Link>
  </div>

  )

}