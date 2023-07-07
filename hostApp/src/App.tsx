import React from "react";
import ReactDOM from "react-dom";

// routes
import { AppRoutes } from "./routes";

// styles
import "./index.scss";

const App = () => {
  return <AppRoutes />;
};
ReactDOM.render(<App />, document.getElementById("app"));
