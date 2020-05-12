import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { config } from './config'

// 引入redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import combineReducers from '../store/combineReducers';

// 引入lodash
import _omit from 'lodash/omit';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f // 配合 redux 插件 方便开发
)(createStore);

// 将store挂在到window上，在浏览器里面通过store.getState()访问
window.store = createStoreWithMiddleware(combineReducers, _omit(window.DATA, ['externalConfig']));


function RouteWithSubRoutes(route) {
    return (
        <Provider store={window.store} >
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
        </Provider>
    );
}

const RouterConfig = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path="/parent" children={<Parent />} render = {} /> */}
                {config.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
}
export default RouterConfig