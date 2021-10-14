import React from "react";
import st from './Login.module.css'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login_TC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {ErrorHandler} from "../ErrorHandler/ErrorHandler";
import {ErrorMode_T} from "../../redux/common-data-reducer";

export const Login = () => {

    const minPasswordLength = 5
    const maxPasswordLength = 25

    const dispatch = useDispatch()

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const userID = useSelector<AppStateType, string>(state => state.auth.id)
    const errorMode = useSelector<AppStateType, ErrorMode_T>(state => state.commonData.errorMode)

    type Values_T = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
    const validate = (values: Values_T) => {
        const errors: Values_T = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length <= minPasswordLength || values.password.length >= maxPasswordLength) {
            errors.password = `Must be longer then ${minPasswordLength} or shorter then ${maxPasswordLength}`;
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate,
        onSubmit: values => {
            const {email, password, rememberMe} = values
            dispatch(login_TC(email, password, rememberMe))
            formik.resetForm();
        },
    });

    if (isAuth) {
        return <Redirect to={`/profile/${userID}/`}/>
    }

    return (
        <div>
            {errorMode !== null && <ErrorHandler/>}
            <div className={st.loginWrapper}>
                <div>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </div>
                <div className={st.formWrapper}>
                    <form className={st.formWrapper} onSubmit={formik.handleSubmit}>
                        <div className={st.inputContainerStyles}>
                        <span>
                            Insert email address please:
                        </span>
                            <input type="email"
                                   {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                            <div className={st.errorStyles}>{formik.errors.email}</div>}
                        </div>
                        <div className={st.inputContainerStyles}>
                        <span>
                            Insert password please:
                        </span>
                            <input type="password"
                                   {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password &&
                            <div className={st.errorStyles}>{formik.errors.password}</div>}
                        </div>
                        <div className={st.checkboxStyles}>
                            <input type="checkbox"
                                   checked={formik.values.rememberMe}
                                   {...formik.getFieldProps('rememberMe')}
                            /> Remember me
                        </div>
                        <div className={st.loginButtonStyles}>

                            <button type={'submit'}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}





