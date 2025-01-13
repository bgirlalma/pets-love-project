import { Navigate } from "react-router-dom";
import { useHookAuth } from "./Redux/hooks/authhook";
import React from "react";

interface PrivateRouterProps {
    component: React.ComponentType
    redirectTo?: string
}

export const PrivateRouter = ({ component: Component, redirectTo = "/login" }) => {
    const { userIsLogIn } = useHookAuth();
    const redirect = !userIsLogIn;
    return redirect ? <Navigate to={redirectTo}/> : <Component/>
}
