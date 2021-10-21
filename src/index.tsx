import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import {ContainerApp} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'antd/dist/antd.css';

// ContainerApp

ReactDOM.render(
    <React.StrictMode>
        < ContainerApp />
        {/*<BrowserRouter>*/}
        {/*    <Provider store={store}>*/}
        {/*        <App />*/}
        {/*    </Provider>*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>,
    document.getElementById('root')
);


