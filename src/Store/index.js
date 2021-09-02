import {combineReducers, createStore} from "redux";
import {userReducer} from "./Reducers/userReducer";
import {fieldReducer} from "./Reducers/fieldReducer";

const rootReducer = combineReducers({
    user: userReducer,
    field: fieldReducer
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())