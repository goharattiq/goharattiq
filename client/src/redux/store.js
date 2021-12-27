import { configureStore } from "@reduxjs/toolkit";
import { workApiSlicer } from "./work/workSlicer";

export const store = configureStore({
  reducer: {
    [workApiSlicer.reducerPath]: workApiSlicer.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(workApiSlicer.middleware);
  },
});
