import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {createStore} from 'redux' ; 

// const reducer =  (state) => {
//     console.log(state)
// }

// let store = createStore(reducer, 0 )

// store.dispatch({type: "BUTTON_CLICK", payLoad: {index : 0}})

// store.subscribe( () => {
//     console.log("log") 
//     console.log(store.getState())
// })

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
