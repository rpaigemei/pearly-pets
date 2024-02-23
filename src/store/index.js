/* Credit to https://github.com/jismonthomas/petfinder-react */
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import uiSlice from "./ui-slice";

const store = configureStore ({
    reducer: {
        user: userSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;