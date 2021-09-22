import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


export type DialogsDataT = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<DialogsDataT>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name='newMessageBody' placeholder={'Enter Text...'}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm<DialogsDataT>({form: "dialogAddMessageForm"})(AddMessageForm)















