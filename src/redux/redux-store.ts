import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store

// @ts-ignore
window.store = store