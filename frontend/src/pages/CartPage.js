import { useParams, useLocation } from 'react-router-dom';
export default function CartPage(props) {
  const params = useParams();
  const productId = params.id;
  // const qty = props.location.search
  //   ? Number(props.location.search.split('=')[1])
  //   : 1;
const {search} =useLocation();
const qtyInUrl = new URLSearchParams(search).get('qty');
const qty = qtyInUrl?Number(qtyInUrl):1;
  return (
    <div>
      <h1>Cart Page</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}