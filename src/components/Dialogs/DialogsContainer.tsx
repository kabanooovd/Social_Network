import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from '../../redux/store'
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}



const DialogsContainer = (props: DialogsPropsType) => {

    const onSendMessageClick = () => props.store.dispatch(sendMessageCreator())

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(UpdateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs  UpdateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogPage={props.store.getState().dialogPage}
        />
    )
}

export default DialogsContainer;