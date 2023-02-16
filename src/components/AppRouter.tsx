import React from 'react';
import {Route, Switch, Redirect} from "react-router";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route => (
                    <Route path={route.path}
                           // exact={route.exact}
                           component={route.component}
                           key={route.path}/>
                ))}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => (
                    <Route key={route.path}
                           path={route.path}
                           // exact={route.exact}
                           component={route.component}
                    />
                ))}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;
