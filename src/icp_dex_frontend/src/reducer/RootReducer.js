import alertReducer from "./Alert";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    alert: alertReducer,
});

export default rootReducer;