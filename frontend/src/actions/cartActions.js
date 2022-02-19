import Axios from "axios"
import {CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, qty) => async(dispatch, getState) => { //dispatch an action and get the state of the Redux store
  //send AJAX req to server to get info about the product
  const {data} = await Axios.get(`/api/products/${productId}`);
  /*dispatch an action to request redux store to add product to cart*/

dispatch({
  type: CART_ADD_ITEM,
  payload:{
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    product: data._id,
    qty,
  },
});
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};