import React from "react";

// contexts
import AuthContextProvider from "host/AuthContextProvider";

// routes
import { AppRoutes } from "./routes";

// styles
import "./index.scss";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  );
};

export default App;
