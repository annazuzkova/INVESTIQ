import { createSlice, configureStore } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    setItems(state, action) {
      return action.payload;
    },
  },
});

export const { addItem, setItems } = itemsSlice.actions;

const ZvedennyaStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export default ZvedennyaStore;
