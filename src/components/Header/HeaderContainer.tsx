import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType
class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
        // authAPI.me().then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setAuthUserDataAC(id, email, login)
        //         }
        //     });
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

export default connect (mapStateToProps, {getAuthUserDataTC})(HeaderContainer);