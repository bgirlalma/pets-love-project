import { Navigate } from "react-router-dom";
import { useHookAuth } from "./Redux/hooks/authhook";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

interface PrivateRouterProps {
    component: React.ComponentType
    redirectTo?: string
}

export const PrivateRouter: React.FC<PrivateRouterProps> = ({ component: Component, redirectTo = "/login" }) => {
  const { userIsLogIn } = useHookAuth();

const redirectShould = !userIsLogIn
  return redirectShould ? <Navigate to={redirectTo} /> : <Component />;
}

export default PrivateRouter