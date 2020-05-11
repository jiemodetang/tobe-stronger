import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { config } from './config'
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
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