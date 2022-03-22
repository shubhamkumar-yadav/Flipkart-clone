import axios from 'axios';
import { ADD_TO_CART,REMOVE_FROM_CART } from '../constants/cartConstant.js'; 
const url = 'http://localhost:8000';
const addToCart = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/product/${id}`);
        dispatch({type:ADD_TO_CART,payload:data})
    } catch (error) {
       console.log('error while calling add to cart api'); 
    }
};
const removeFromCart = (id) => (dispatch) => {
    dispatch({type:REMOVE_FROM_CART,payload:id})
};
export {addToCart,removeFromCart};