
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../feature/recipeSlice";

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});

export default store;
