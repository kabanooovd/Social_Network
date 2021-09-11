import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
















// import React, {Component} from "react";
// import {Redirect} from "react-router-dom";
//
//
// export const withAuthRedirect = (Component: any) => {
//     class RedirectComponent extends React.Component<any, any> {
//         render() {
//             if (!this.props.isAuth) return <Redirect to='/login' />
//             return <Component {...this.props} />
//         }
//     }
//     return RedirectComponent
// }
