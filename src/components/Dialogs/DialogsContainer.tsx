import React from 'react';
import {
    DialogsReducerLocalStateType,
    sendMessageCreator, updateMessageFieldAC,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogPage: DialogsReducerLocalStateType
    text: string
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
    updateMessageBody: (text: string) => void
}

export type DialogPagePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
        text: state.dialogPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
        updateMessageBody: (text: string) => {
            dispatch(updateMessageFieldAC(text))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)









