import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/dummyApiData";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },

  //   helps with the caching
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);
