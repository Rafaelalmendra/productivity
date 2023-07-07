import React from "react";
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// contexts
import { AuthContextProvider } from "../contexts";

// views
import { LoginView } from "../views";

// utils
import { ErrorBoundary } from "../utils";

// components
import { Layout } from "../components";

// pages
const TodoApp = React.lazy(() => import("todoApp/TodoApp"));

const AppRoutes = () => {
  const todoAppKey = Math.random();

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LoginView />
              </Layout>
            }
          />
          <Route
            path="/todo/*"
            element={
              <Suspense key={todoAppKey} fallback={"loading..."}>
                <ErrorBoundary>
                  <Layout>
                    <TodoApp />
                  </Layout>
                </ErrorBoundary>
              </Suspense>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export { AppRoutes };
