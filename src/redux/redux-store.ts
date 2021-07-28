import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sideBarReducer
})

let store: any = createStore(reducers)

export default store


