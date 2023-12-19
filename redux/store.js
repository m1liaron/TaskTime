import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './taskSlice'
import historyReducer from './historySlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        history: historyReducer
    }
})

export default store;