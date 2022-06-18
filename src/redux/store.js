//create store
import { configureStore } from "@reduxjs/toolkit";

import aboutReducer from "./reducer/about";
import modalReducer from "./reducer/modal";

const rootReducer = {
    //add reducers here
    about: aboutReducer,
    modal: modalReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;