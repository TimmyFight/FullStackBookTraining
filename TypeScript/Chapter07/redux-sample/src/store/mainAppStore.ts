import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./AppState";

const mainAppStore = configureStore({reducer: rootReducer});

export default mainAppStore;
