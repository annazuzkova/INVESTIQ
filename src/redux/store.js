import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './finance/financeSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
    reducer: {
        finance: financeReducer,
        auth: authReducer,
    },
});

export default store;
