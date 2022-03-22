import axios from "axios";
import { GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,GET_PRODUCT_DETAIL_SUCCESS,GET_PRODUCT_DETAIL_FAIL } from "../constants/productConstant.js";
const URL = 'http://localhost:8000';
const  getProducts = ()=> async (dispatch)=>{
    try {
        const {data} =await axios.get(`${URL}/products`);
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL,payload:error.message});
    }
};
const  getProductDetails = (id)=> async (dispatch)=>{
    try {
        const {data} =await axios.get(`${URL}/product/${id}`);
        dispatch({type:GET_PRODUCT_DETAIL_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:GET_PRODUCT_DETAIL_FAIL,payload:error.message});
    }
};
export {getProducts,getProductDetails};