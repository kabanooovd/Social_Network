import React from "react";
import Spinner from "../../../assets/Spinner.gif";
import s from "../../Users/Users.module.css";

type LoadingSpinnerPropsType = {}

export const LoadingSpinner = (props: LoadingSpinnerPropsType) => {
    return<div><img src={Spinner} className={s.loadingSpinner}/></div>
}