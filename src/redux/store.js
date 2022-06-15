//create store
import { configureStore } from "@reduxjs/toolkit";

import aboutReducer from "./reducer/about";

const rootReducer = {
    //add reducers here
    about: aboutReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;