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
import {ActionTypes} from "../../redux/ActionTipizationType";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
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













