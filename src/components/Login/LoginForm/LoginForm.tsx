import React from "react";
import {Field, InjectedFormProps, reduxForm } from "redux-form";
import {Input} from "../../common/ControlForms/FormsControls";
import {required} from "../../../utils/validators/validators";

export type FormDataT = {
    login: string
    password: string
    RememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataT>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Insert Login'}
                       component={Input}
                       name={'login'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Insert Password'}
                       component={Input}
                       name={'password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'RememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm<FormDataT>({form: 'login'})(LoginForm)