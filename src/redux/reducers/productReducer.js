import {GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,GET_PRODUCT_DETAIL_SUCCESS,GET_PRODUCT_DETAIL_FAIL} from '../constants/productConstant.js';

const getProductsReducer = (state={products:[]},action)=>{
    switch(action.type){
        case GET_PRODUCT_SUCCESS:
            return {products:action.payload}
        case GET_PRODUCT_FAIL:
            return {error:action.payload}
        default:
            return state    

    }
};
const getProductDetailsReducer = (state={product:{}},action)=>{
    switch(action.type){
        case GET_PRODUCT_DETAIL_SUCCESS:
            return {product:action.payload}
        case GET_PRODUCT_DETAIL_FAIL:
            return {error:action.payload}
        default:
            return state    

    }
};
export {getProductsReducer,getProductDetailsReducer};