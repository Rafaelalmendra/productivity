import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// contexts
import { AuthContextProvider } from "host/AuthContextProvider";

// views
import { HomeView } from "./views";

// styles
import "./index.scss";

const TodoApp = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <HomeView />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<TodoApp />, document.getElementById("app"));
