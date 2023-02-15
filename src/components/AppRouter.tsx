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
                    <Route key={route.path} {...route}/>
                ))}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>

            :
            <Switch>
                {publicRoutes.map(route => (
                    <Route key={route.path} {...route}/>
                ))}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;
