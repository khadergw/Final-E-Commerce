import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state={cartItems:[]}, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
    const item= action.payload;
    console.log(item)
    /*compare the current item to be added with the items exist in the cart */
    const existItem = state.cartItems.find((x) => x.product ===item.product);
    console.log(existItem)
    if(existItem){
      return{
        ...state, //doesn't change other properties
        cartItems: state.cartItems.map((x)=>x.product=== existItem.product? item:x),
      };
    } else {
      return {...state, cartItems: [...state.cartItems, item]};
    }
    default:
       return state;
  }
} 