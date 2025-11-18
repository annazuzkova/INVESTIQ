import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: [],
    balance: 0,
};

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        addTransaction(state, action) {
            state.transactions.push(action.payload);
            state.balance += Number(action.payload.amount) || 0;
        },
        removeTransaction(state, action) {
            const id = action.payload;
            const idx = state.transactions.findIndex(t => t.id === id);
            if (idx !== -1) {
                state.balance -= Number(state.transactions[idx].amount) || 0;
                state.transactions.splice(idx, 1);
            }
        },
    },
});

export const { addTransaction, removeTransaction } = financeSlice.actions;
export default financeSlice.reducer;
