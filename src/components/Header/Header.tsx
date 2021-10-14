import React from 'react';
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";
import {useDispatch} from "react-redux";
import {logout_TC} from "../../redux/auth-reducer";
import {ErrorHandler} from "../ErrorHandler/ErrorHandler";

const Header = (props: HeaderPropsType) => {

    //const dispatch = useDispatch()

    const logoutHandler = () => {
        // dispatch(logout_TC())
        props.logout_TC()
    }

    return (
        <header className={s.header}>
            <img src="https://yt3.ggpht.com/a/AATXAJyY-srDL9oA0gDpNMLQMlvHSDUM4NaRMNUoKQ=s900-c-k-c0xffffffff-no-rj-mo"
                 alt=''/>
            <div className={s.loginBlock}>
                {
                    props.isAuth &&
                        <div>
                            {props.login}
                            <button onClick={logoutHandler}>Logout</button>
                        </div>
                }
            </div>
        </header>
    )
}


export default Header;