import React from "react";
import {FormDataT, ReduxLoginForm} from "./LoginForm/LoginForm";


export const Login = () => {

    const onSubmit = (formData: FormDataT) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}





