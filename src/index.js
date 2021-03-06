import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
//for redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//inital state
const firstReducerInitialState = 0;
const firstReducer = (state = firstReducerInitialState, action) =>{
  console.log('in firstReducer', state, action);
  if(action.type === 'pickUp'){
    return state + action.payload;
  }else if(action.type === 'dropOff'){
    return state - action.payload;
  }
  return state;
 
  
}//end firstReducer

//create a storage space for redux data, tell it to use our reducer
const storeInstance = createStore(firstReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={storeInstance}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
