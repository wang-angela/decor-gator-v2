import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAccessToken } from "../hooks/useAccessToken";

export type ProtectedRouteProps = {
  page: JSX.Element;
};

function ProtectedRoute({ page }: ProtectedRouteProps) {
  const [isAuth, setIsAuth] = useAuth();

  if (isAuth) {
    return page;
  }
  return <Navigate to={"/Login"} />;
}

export default ProtectedRoute;
