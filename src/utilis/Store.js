import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

//api
const Store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,

    },
});

export default Store;