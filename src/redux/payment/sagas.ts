import { all, call, put, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import { getPaymentData } from '../../services/account';
import { IPaymentRequest } from './types';

function* GET_PAYMENT_DATA() {
  console.log('Saga triggered: GET_PAYMENT_DATA');
  
  const reqData = {
    operatorId: '68ED3ABC-6F1A-41F5-87D0-D64A1A0D9746',
    currencyDisplayCodes: 'VND',
    active: 'All',
    category: 'All',
    vendors: 'All',
    countryCodes: 'VN',
  };

  try {
    const data: IPaymentRequest = yield call(getPaymentData, (reqData));
    if (typeof data !== 'number') {
      console.log('Request result:', data);
      yield put({
        type: actions.SET_STATE,
        payload: { data },
      });
    } else {
      console.error('Error code:', data);
    }
  } catch (error) {
    console.error('Saga error:', error);
  }
}

export default function* paymentSaga() {
    console.log('Saga watcher running');
    yield all([
      takeLatest(actions.GET_PAYMENT_DATA, GET_PAYMENT_DATA),
    ]);
}
