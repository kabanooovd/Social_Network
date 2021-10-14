import React from 'react';
import { Alert } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ErrorMode_T, setErrorModeAC} from '../../redux/common-data-reducer';



export const ErrorHandler = () => {

    const dispatch = useDispatch()
    const errorMode = useSelector<AppStateType, ErrorMode_T>(state => state.commonData.errorMode)

    const onClose = (e: React.MouseEvent<HTMLButtonElement | undefined>) => {
        // console.log(e, 'I was closed.');
    };

    let x = setTimeout( () => {
        dispatch(setErrorModeAC(null))
        clearTimeout(x)
    }, 3000 )


    return (
        <>
            <Alert
                message={`ERROR`}
                description={errorMode}
                type="error"
                closable
                onClose={onClose}
                banner
            />
        </>
    )
}


