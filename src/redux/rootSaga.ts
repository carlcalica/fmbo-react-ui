import { all } from 'redux-saga/effects';
import paymentSaga from './payment/sagas'; // Adjust the path as needed

export default function* rootSaga() {
  yield all([
    paymentSaga(),
    // other sagas...
  ]);
}
