import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
    AddPostActionType,
    NewMessageBodyType,
    RootStateType,
    SendMessageType, StoreType,
    UpdateTestActionType
} from './redux/state'

type AppStateType = {
    state: RootStateType
    dispatch: (action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => void
    store: StoreType
    //addPost: (postMessage: string) => void
    //updateNewPostText: (text: string) => void
}

const App = (props: AppStateType) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile posts={props.state.profilePage.posts}
                             dispatch={props.dispatch}
                             newPostText={props.state.profilePage.newPostText}
                             //updateNewPostText={props.updateNewPostText}
                    />}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs store={props.store}
                            /*dialogs={props.state.dialogPage.dialogs}
                             messages={props.state.dialogPage.messages}
                             newMessageBody={props.state.dialogPage.newMessageBody}
                             dispatch={props.dispatch}*/

                    />}/>
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;