import {createStore, combineReducers, applyMiddleware} from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {commonDataReducer} from "./common-data-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    commonData: commonDataReducer,
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

// @ts-ignore
window.store = store

