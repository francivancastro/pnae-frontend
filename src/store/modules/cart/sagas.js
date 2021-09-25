import {takeLatest, put, all} from 'redux-saga/effects'
import {addToCartSuccess} from './actions';

export function* addToCart({ payload }) {
  
  yield put(addToCartSuccess(payload.product))
}

export function setCart({ payload }) {
  if (!payload) return;
  const {carts} = payload.cart;
  console.log(carts)
}

export default all([
  takeLatest('persist/REHYDRATE', setCart),
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);