import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../common/ControlForms/FormsControls";
import {maxLengthVC, required} from "../../utils/validators/validators";


export type DialogsDataT = {
    newMessageBody: string
}

const maxLength50 = maxLengthVC(50)

const AddMessageForm = (props: InjectedFormProps<DialogsDataT>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   name='newMessageBody'
                   placeholder={'Enter Text...'}
                   validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm<DialogsDataT>({form: "dialogAddMessageForm"})(AddMessageForm)















