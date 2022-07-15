import { configureStore } from "@reduxjs/toolkit";
import formStepReducer from "./slices/formStepSlice";

const store = configureStore({
    reducer: {
        formStep: formStepReducer,
    },
});

export default store;
