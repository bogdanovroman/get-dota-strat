import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, browserHistory} from 'react-router';
import Main from './main';
import Heroes from './heroes';
import Hero from './heroes/hero';
import Login from './login';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
    requireAuth(nextState, replace) {
        if (false) {
            replace({pathname: '/login'})
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Main} onEnter={this.requireAuth}/>
                    <Route path="/heroes" component={Heroes} onEnter={this.requireAuth}/>
                    <Route path="/heroes/:id" component={Hero} onEnter={this.requireAuth}/>
                </Router>
            </Provider>
        );
    }
}
