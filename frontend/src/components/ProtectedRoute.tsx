import { Navigate } from "react-router-dom";
import { useAccessToken } from "../context/provider";
import { verifyToken } from "../middleware/jwtApi";
import { useEffect, useState } from "react";

export type ProtectedRouteProps = {
  page: JSX.Element;
};

function ProtectedRoute({ page }: ProtectedRouteProps) {
  const [accessToken, setAccessToken] = useAccessToken();
  const [result, setResult] = useState(false);

  console.log(accessToken);

  useEffect(() => {
    async function retrieve() {
      const response = await verifyToken(accessToken);
      setResult(response);
    }
    retrieve();
  }, []);
  console.log(result);

  if (!result) {
    return page;
  }
  return <Navigate to={"/Login"} />;
}

export default ProtectedRoute;
