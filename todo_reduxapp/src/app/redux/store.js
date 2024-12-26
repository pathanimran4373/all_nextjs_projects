const {configureStore} = require("@reduxjs/toolkit")
import Reducer from './slice'
export const store = configureStore({
    reducer:Reducer
})
