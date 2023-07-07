import React from "react";
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route
        path="/todo"
        element={
          <Suspense key={todoAppKey} fallback={"loading..."}>
            <ErrorBoundary>
              <TodoApp />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  );
};

export { AppRoutes };
