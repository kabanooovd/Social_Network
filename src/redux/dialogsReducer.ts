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
    messages: MessageType[]
}

type GeneralDialogsActionType = SendMessageTypeAC

export const dialogsReducer = (state: DialogsReducerLocalStateType = initialState, action: GeneralDialogsActionType) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {...state, messages: [...state.messages, {id: 6, message: body}]}
        }
        default:
            return state
    }
}

type SendMessageTypeAC = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = (newMessageBody: string) => {
    return {type: SEND_MESSAGE, newMessageBody} as const
}