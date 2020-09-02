import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import App from './App.jsx'
import Firebase, { FirebaseContext } from './Components/Firebase';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <FirebaseContext.Consumer>
            {firebase => (
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <App firebase={firebase}/>
                </MuiPickersUtilsProvider>
            )}
        </FirebaseContext.Consumer>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
