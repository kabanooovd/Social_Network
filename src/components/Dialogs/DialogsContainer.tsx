import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    AddPostActionType,
    NewMessageBodyType,
    RootStateType,
    SendMessageType,
    StoreType,
    UpdateTestActionType
} from '../../redux/store'
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsPropsType = {
    store: StoreType
}

/*

const DialogsContainer = (props: DialogsPropsType) => {

    const onSendMessageClick = () => props.store.dispatch(sendMessageCreator())

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(UpdateNewMessageBodyCreator(body))
    }

    return (/!*<StoreContext.Consumer>*!/
        <Dialogs UpdateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogPage={props.store.getState().dialogPage}
        />
    )
    /!*</StoreContext.Consumer>*!/
}
*/

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => void) => {
    return {
        UpdateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;













