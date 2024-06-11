import { combineReducers } from "redux";
import paymentReducers from "./payment/reducers";


const rootReducer = combineReducers({
    payment: paymentReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
