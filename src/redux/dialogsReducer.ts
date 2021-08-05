import {
    AddPostActionType, DialogsType,
    MessageType,
    NewMessageBodyType,
    RootStateType,
    SendMessageType,
    UpdateTestActionType
} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

type DialogsReducerLocalStateType = {
    dialogs: DialogsType[]
    newMessageBody: string
    messages: MessageType[]
}

export const dialogsReducer = (state: DialogsReducerLocalStateType = initialState,
                               action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state, newMessageBody: action.body}
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]}
        }
        default:
            return state
    }
}

export const sendMessageCreator = (): SendMessageType =>
    ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreator = (body: string): NewMessageBodyType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})




