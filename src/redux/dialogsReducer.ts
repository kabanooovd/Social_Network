import {
    AddPostActionType, DialogsType,
    MessageType,
    NewMessageBodyType,
    RootStateType,
    SendMessageType,
    UpdateTestActionType
} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogsReducerLocalStateType = {
    dialogs: DialogsType[]
    newMessageBody: string
    messages: MessageType[]
}

export const dialogsReducer = (state: DialogsReducerLocalStateType,
    action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body})
    }
    return state
    // switch (action.type) {
    //     case UPDATE_NEW_MESSAGE_BODY:
    //         state.newMessageBody = action.body
    //         return state
    //     case SEND_MESSAGE:
    //         let body = state.newMessageBody;
    //         state.newMessageBody = '';
    //         state.messages.push({id: 6, message: body})
    //         return state
    // }
}

export const sendMessageCreator = (): SendMessageType =>
    ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreator = (body: string): NewMessageBodyType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})




