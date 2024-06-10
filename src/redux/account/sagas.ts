import { all, call, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";


function* SET_BANK_ACCOUNT() {

}

export default function* saga() {
    yield all([
        takeLatest(actions.SET_BANK_ACCOUNT, SET_BANK_ACCOUNT),
    ]);
}
