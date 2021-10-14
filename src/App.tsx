import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {Route, withRouter} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
// import {initializeApp_TC} from "./redux/common-data-reducer";
import {AppStateType} from "./redux/redux-store";
import {getAuthUserDataTC} from "./redux/auth-reducer";

type CombinedTypes = MapStateToProps_T & MapDispatchToProps_T
class App extends React.Component<CombinedTypes> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }


    render() {

        if (!this.props.initMode) {
            return <h1>Loading...</h1>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
        );
    }
}

type MapDispatchToProps_T = {
    getAuthUserDataTC:() => void
}

type MapStateToProps_T = {
    initMode: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps_T => {
    return {
        initMode: state.commonData.initMode
    }
}



// https://stackoverflow.com/questions/44118060/react-router-dom-with-typescript
//export default withRouter(connectModule) as React.ComponentClass<{}>;
export default compose(
    withRouter,
    connect(mapStateToProps, {getAuthUserDataTC}))(App) as React.ComponentClass<{}>;

// export default connect(null, {getAuthUserDataTC})(App)




















// import React from 'react';
// import './App.css';
// import Navbar from "./components/Navbar/Navbar";
// import News from "./components/News/News";
// import {Route} from 'react-router-dom';
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
// import {Login} from "./components/Login/Login";
//
// const App = () => {
//     return (
//         <div className='app-wrapper'>
//             <HeaderContainer />
//             <Navbar/>
//             <div className='app-wrapper-content'>
//                 <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
//                 <Route path='/dialogs' render={() => <DialogsContainer />}/>
//                 <Route path='/users' render={() => <UsersContainer />}/>
//                 <Route path='/news' component={News} />
//                 <Route path='/music' component={Music} />
//                 <Route path='/settings' component={Settings} />
//                 <Route path='/login' component={Login} />
//             </div>
//         </div>
//     );
// }
//
// export default App;