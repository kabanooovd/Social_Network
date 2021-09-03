import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType
class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
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