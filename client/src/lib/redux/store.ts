import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "@/api/baseApi";

const rootReducer = combineReducers({
  [BaseApi.reducerPath]: BaseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
