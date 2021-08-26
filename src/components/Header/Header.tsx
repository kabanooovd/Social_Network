import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
    return (
            <header className={s.header}>
                <img src="https://yt3.ggpht.com/a/AATXAJyY-srDL9oA0gDpNMLQMlvHSDUM4NaRMNUoKQ=s900-c-k-c0xffffffff-no-rj-mo" alt=''/>
                {/*<span>Dimas - Social net-work</span>*/}
                <div className={s.loginBlock}>
                    {
                        props.isAuth  ? props.login
                            :  <NavLink to={'/login'}>LOGIN</NavLink>
                    }

                </div>
            </header>

    )
}


export default Header;