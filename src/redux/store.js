import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer,getProductDetailsReducer } from './reducers/productReducer.js';
import {cartReducer} from './reducers/cartReducer.js';
const middleware = [thunk];
const reducer = combineReducers({
    getProductsReducer : getProductsReducer,
    getProductDetailsReducer : getProductDetailsReducer,
    cart : cartReducer
});
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);
export {store};