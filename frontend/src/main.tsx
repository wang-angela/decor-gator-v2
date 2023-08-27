import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { AccessTokenProvider } from "./context/provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/decor-gator-v2/">
      {/* @ts-ignore */}
      <AccessTokenProvider>
        <App />
      </AccessTokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
