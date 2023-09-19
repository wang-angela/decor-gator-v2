import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { AccessTokenProvider } from "./hooks/useAccessToken.tsx";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./hooks/useAuth.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/decor-gator-v2/">
      <CookiesProvider>
        {/* @ts-ignore */}
        <AccessTokenProvider>
          {/* @ts-ignore */}
          <AuthProvider>
            <App />
          </AuthProvider>
        </AccessTokenProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
