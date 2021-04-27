import React from 'react';
import {render} from 'react-dom';
import {counterApp} from "./reducers";
import {createStore} from "redux";

import { Provider } from 'react-redux';
import CounterContainer from "./containers/Counter";
// import {Counter} from "./components/Counter";

const store = createStore(counterApp);

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
)
