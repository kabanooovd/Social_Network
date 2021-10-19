import React, {useState} from "react";
import {useDispatch} from "react-redux";

type ProfileStatusT = {
    status: string
    updateStatusTC: (status: string) => void
}

type stateT = {
    editMode: boolean
    status: string
}

export const ProfileStatusByHooks = (props: ProfileStatusT) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const turnOnInput = () => {
        setEditMode(true)
    }
    const turnOnSpan = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }
    const changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (

        <div>
            {!editMode ?
                <span onDoubleClick={turnOnInput}>
                        {props.status || 'no status'}
                    </span> :
                <input type='text'
                       value={status}
                       onBlur={turnOnSpan}
                       autoFocus={true}
                       onChange={changeStatusHandler}
                />}
        </div>
    )
}