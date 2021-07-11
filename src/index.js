import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    counter:{
        value: 0
    },
    posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':{
            return{...state,
                counter:
                    {value: state.counter.value+1}
            }
        }
        case 'DEC':{
            return {...state,
            counter:
                {value: state.counter.value-1}
            }
        }
        case 'NUL':{
            return {...state,
            counter:
                {value: state.counter.value=0}
            }
        }
        case 'CUST':{
            if (Number(action.payload)){
                return {...state,
                counter:
                    {value: state.counter.value = Number(action.payload.custom)}
                }
            }
        }
        case 'ADD_POST':{
            return {
                ...state,
                posts: action.payload.posts
            }
        }


        default:
            return state;

    }
}


const store = createStore(reducer)

store.subscribe(()=>{
   console.log(store.getState())
})


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
