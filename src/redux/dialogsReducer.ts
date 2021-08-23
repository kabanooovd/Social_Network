
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

type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsReducerLocalStateType = {
    dialogs: DialogsType[]
    newMessageBody: string
    messages: MessageType[]
}

type GeneralDialogsActionType = SendMessageTypeAC | UpdateNewMessageBodyCreatorTypeAC

export const dialogsReducer = (state: DialogsReducerLocalStateType = initialState, action: GeneralDialogsActionType) => {

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

type SendMessageTypeAC = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE} as const
}
type UpdateNewMessageBodyCreatorTypeAC = ReturnType<typeof UpdateNewMessageBodyCreator>
export const UpdateNewMessageBodyCreator = (body: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body} as const
}

