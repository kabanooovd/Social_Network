import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from '../../redux/store'

type DialogsPropsType = {
    UpdateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogPage

    const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    const messagesElements = state.messages.map(el => <Message message={el.message}/>)

    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => props.sendMessage()

    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.UpdateNewMessageBody(body)
    }

    const enterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') onSendMessageClick()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder={'Enter Text...'}
                              onChange={onNewMessageChange}
                              value={newMessageBody}
                              onKeyPress={enterPressed}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;