import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'


export type dialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: dialogItemType) => {
    return (
        <div className={s.dialog}>        {/*тут будет отображаться значек для выбора собеседника из переченя*/}
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;