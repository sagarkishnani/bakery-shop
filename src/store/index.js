/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import categoryReducer from './reducers/category.reducer';
import productReducer from './reducers/product.reducer';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cart.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
