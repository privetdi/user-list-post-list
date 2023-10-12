import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./reducers/conunterSlice";


const store = configureStore({
  reducer: {
    store: stateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
