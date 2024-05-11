import { configureStore } from "@reduxjs/toolkit";
import TodoSlice  from "./TodoSlicer";

const store=configureStore({
    reducer:{
        Todos:TodoSlice
    }
})
export default store