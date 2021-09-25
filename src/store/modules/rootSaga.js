import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([auth, cart]);
}
