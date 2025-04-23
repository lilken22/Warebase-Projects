import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import combineSlices from "./slices/index"


const store = configureStore({
  reducer: {
    auth: combineSlices?.authSlice,
    user: combineSlices?.userSlice,
    blog: combineSlices?.blogSlice,
    message: combineSlices?.messageSlice,
    payment: combineSlices?.paymentSlice,
    property: combineSlices?.propertySlice,
  },
});
setupListeners(store.dispatch);
export default store;
