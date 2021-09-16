import React from "react";
import {Field, InjectedFormProps, reduxForm } from "redux-form";

export type FormDataT = {
    login: string
    password: string
    RememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataT>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Insert Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'Insert Password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'RememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm<FormDataT>({form: 'login'})(LoginForm)