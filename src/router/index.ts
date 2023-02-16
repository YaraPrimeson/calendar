import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export type IRoute = {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export enum RouteNames {
    LOGIN = "/login",
    EVENT = "/"
}

export const publicRoutes: IRoute[] = [{path: RouteNames.LOGIN, component: Login, exact: true}]
export const privateRoutes: IRoute[] = [{path: RouteNames.EVENT, exact: true, component: Event}]
