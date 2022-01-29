import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import { HashRouter, Redirect, Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store, { AppStateType } from "./redux/redux-store";
import { getAuthUserDataTC } from "./redux/auth-reducer";
import { withSuspense } from "./hoc/withSuspense";
const DialogsContainer = React.lazy(
	() => import("./components/Dialogs/DialogsContainer")
);

type CombinedTypes = MapStateToProps_T & MapDispatchToProps_T;

class App extends React.Component<CombinedTypes> {
	componentDidMount() {
		this.props.getAuthUserDataTC();
	}
	render() {
		if (!this.props.initMode) {
			return <h1>Loading...</h1>;
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/profile/:userId" render={() => <ProfileContainer />} />
					<Route path="/dialogs" render={withSuspense(DialogsContainer)} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
					<Route path="/login" component={Login} />
                    <Redirect from={"/"} to={`/login`} />
				</div>
			</div>
		);
	}
}

type MapDispatchToProps_T = {
	getAuthUserDataTC: () => void;
};

type MapStateToProps_T = {
	initMode: boolean;
	id: string;
	isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToProps_T => {
	return {
		initMode: state.commonData.initMode,
		id: state.auth.id,
		isAuth: state.auth.isAuth,
	};
};

const AppContainerData = compose(
	withRouter,
	connect(mapStateToProps, { getAuthUserDataTC })
)(App) as React.ComponentClass<{}>;

export const ContainerApp = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContainerData />
			</Provider>
		</HashRouter>
	);
};
