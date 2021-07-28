import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from '../../redux/store'
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    store: StoreType

    // messages: Array<MessageType>
    // dialogs: Array<DialogsType>
    // newMessageBody: string
    // dispatch: (action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => void
}



const Dialogs = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogPage

    const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    // const dialogsElements = props.dialogs // из массива объектов, получаем массив элементов JSX, кот явл-ся вызовом компоненты.
    //     .map( arrElement => <DialogItem name={arrElement.name} id={arrElement.id}/> );

    const messagesElements = state.messages.map(el => <Message message={el.message}/>)
    const newMessageBody = state.newMessageBody

    // const messagesElements = props.messages.map( arrElement => <Message message={arrElement.message}/>)
    // const newMessageBody = props.newMessageBody;

    const onSendMessageClick = () => props.store.dispatch(sendMessageCreator())


    // const onSendMessageClick = () => {
    //     props.dispatch(sendMessageCreator())
    // }
    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(UpdateNewMessageBodyCreator(body))
    }

    // const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.dispatch(UpdateNewMessageBodyCreator(body))
    // }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea placeholder={'Enter Text...'}
                               onChange={onNewMessageChange}
                               value={newMessageBody}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;