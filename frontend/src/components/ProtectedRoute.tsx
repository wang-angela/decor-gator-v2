import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  allowAccess: boolean;
  page: JSX.Element;
};

function ProtectedRoute({ allowAccess, page }: ProtectedRouteProps) {
  if (allowAccess) {
    return page;
  }
  return <Navigate to={"/Login"} />;
}

export default ProtectedRoute;
