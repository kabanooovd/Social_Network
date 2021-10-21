import React from "react";
import ReactDOM from "react-dom";
import {ContainerApp} from "./App";

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContainerApp />, div)
    ReactDOM.unmountComponentAtNode(div)
})