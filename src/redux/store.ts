import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
    addPost?: (postMessage: string) => void
}
type SideBarType = {}

export type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
export type UpdateTestActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    text: string
}

export type NewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
    //body: string
}


export type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    //addPost: () => void
    //updateNewPostText: (text: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => void

}

let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hey mate', likesCount: 5},
                {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
            ]
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimas'},
                {id: 2, name: 'Stepan'},
                {id: 3, name: 'Chuvak'},
                {id: 4, name: 'Snejana'}
            ],
            messages: [
                {id: 1, message: 'Hey Bro!!!'},
                {id: 2, message: 'How is your lessons?'},
                {id: 3, message: 'Work harder, its the only way to become a specialist'}
            ],
            newMessageBody: ''
        },
        sideBar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State has changed');
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber()
    }

}






export default store
// window.store = store