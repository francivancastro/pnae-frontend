import { takeLatest, call, put, all } from 'redux-saga/effects';

import { apiv2 } from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, loginFailure } from './actions';

export function* signInCustomer({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(apiv2.post, '/sessions/customer', { cpf, password });

    const { token, user, profile_image } = response.data;

    apiv2.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, profile_image));
    
    history.push('/');
  } catch (error) {
    alert(error.response.data.message)
    yield put(loginFailure())
  }
}

export function* signInAdmin({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(apiv2.post, '/sessions/user', { email, password });

    const { token, user, profile_image } = response.data;

    apiv2.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, profile_image));
    
    history.push('/admin/listagem/produtos');
  } catch (error) {
    alert(error.response.data.message)
    yield put(loginFailure())
  }
}

export function* signInProducer({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(apiv2.post, '/sessions/producer', { cpf, password });

    const { token, user, profile_image } = response.data;

    apiv2.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, profile_image));
    
    history.push('/produtor/listagem/produtos');
  } catch (error) {
    alert(error.response.data.message)
    yield put(loginFailure())
  }
}

export function* signInCooperative({ payload }) {
  try {
    const { cnpj, password } = payload;

    const response = yield call(apiv2.post, '/sessions/cooperative', { cnpj, password });

    const { token, user, profile_image } = response.data;

    apiv2.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, profile_image));
    
    history.push('/cooperativa/listagem/produtos');
  } catch (error) {
    alert(error.response.data.message)
    yield put(loginFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    apiv2.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_IN_CUSTOMER_REQUEST', signInCustomer),
  takeLatest('@auth/SIGN_IN_ADMIN_REQUEST', signInAdmin),
  takeLatest('@auth/SIGN_IN_PRODUCER_REQUEST', signInProducer),
  takeLatest('@auth/SIGN_IN_COOPERATIVE_REQUEST', signInCooperative)
]);
