
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {somereducer: someSlice.reducer}
});

export default store;