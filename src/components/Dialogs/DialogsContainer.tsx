import React from 'react';
import s from './Dialogs.module.css'
import {
    DialogsReducerLocalStateType,
    sendMessageCreator,
    UpdateNewMessageBodyCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogPage: DialogsReducerLocalStateType
}

type MapDispatchToPropsType = {
    UpdateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogPagePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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













