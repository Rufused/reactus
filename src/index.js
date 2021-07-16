import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import GetData from "./services/GetData";

const initialState = {
    counter: {
        value: 0
    },
    users: [],
    posts: [],
    comments: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USERS': {

            return {
                ...state,
                users: action.users
            }
        }
        case 'ADD_POSTS': {

            return {
                ...state,
                posts: action.posts
            }
        }
        case 'ADD_COMMENTS': {

            return {
                ...state,
                comments: action.comments
            }
        }
        case 'INC': {
            return {
                ...state,
                counter:
                    {value: state.counter.value + 1}
            }
        }
        case 'DEC': {
            return {
                ...state,
                counter:
                    {value: state.counter.value - 1}
            }
        }
        case 'NUL': {
            return {
                ...state,
                counter:
                    {value: state.counter.value = 0}
            }
        }
        case 'CUST':
            return {
                ...state,
                counter: {value: state.counter.value + action.payload}
            }
        default:
            return {...state}
    }
}


const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            <GetData/>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
