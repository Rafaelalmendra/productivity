import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// contexts
import { AuthContextProvider } from "host/AuthContextProvider";

// routes
import { AppRoutes } from "./routes";

// styles
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
