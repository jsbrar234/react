import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";

const store = configureStore({
    reducer: {
        user: userSlice
    }
})
console.log('store', store)
export default store;