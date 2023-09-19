import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export type ProtectedRouteProps = {
  page: JSX.Element;
};

function ProtectedRoute({ page }: ProtectedRouteProps) {
  const [isAuth, setIsAuth] = useAuth();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    setAccess(isAuth);
  });

  if (isAuth) {
    return page;
  }
  return <Navigate to={"/Login"} />;
}

export default ProtectedRoute;
