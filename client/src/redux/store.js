import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools}  from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { todosReducers } from "./reducers/todosReducers";
import { tabReducer } from "./reducers/tabReducer";
const reducer=combineReducers(
    {
        todos:todosReducers,
        currentTab:tabReducer
    }
)
const middleware=[thunk]

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;