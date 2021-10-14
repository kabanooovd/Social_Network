import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPagePropsType} from "./DialogsContainer";



const Dialogs = (props: DialogPagePropsType) => {
    const state = props.dialogPage
    const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messagesElements = state.messages.map(el => <Message message={el.message}/>)
    // const addNewMessage = (values: DialogsDataT) => props.sendMessage(values.newMessageBody)

    const messageFieldHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageBody(e.currentTarget.value)
    }

    const addMessage = () => props.sendMessage(props.text)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                {/*<AddMessage onSubmit={addNewMessage}/>*/}


                <textarea onChange={messageFieldHandler} value={props.text} />


                <div>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;







