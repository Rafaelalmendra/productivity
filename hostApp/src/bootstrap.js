import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

// contexts
import AuthContextProvider from "host/AuthContextProvider";
import { UserProvider } from "host/UserAuth";

// components
import Layout from "./components/Layout";

import App from "./App";

root.render(
  <BrowserRouter>
    <UserProvider>
      <AuthContextProvider>
        <Layout>
          <App />
        </Layout>
      </AuthContextProvider>
    </UserProvider>
  </BrowserRouter>
);
