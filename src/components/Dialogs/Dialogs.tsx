import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPagePropsType} from "./DialogsContainer";
import {AddMessageFormRedux, DialogsDataT} from "./AddMessageFormRedux";



const Dialogs = (props: DialogPagePropsType) => {
    const state = props.dialogPage
    const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messagesElements = state.messages.map(el => <Message message={el.message}/>)
    const addNewMessage = (values: DialogsDataT) => props.sendMessage(values.newMessageBody)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;







