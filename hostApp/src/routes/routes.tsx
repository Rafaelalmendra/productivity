import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// views
import { LoginView } from "../views";

// utils
import { ErrorBoundary } from "../utils";

// pages
const TodoMicroFrontend = React.lazy(() => import("todoApp/TodoApp"));
const FinanceMicroFrontend = React.lazy(() => import("financeApp/FinanceApp"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route
        path="/todo"
        element={
          <Suspense fallback={"loading..."}>
            <ErrorBoundary>
              <TodoMicroFrontend />
            </ErrorBoundary>
          </Suspense>
        }
      />
      <Route
        path="/finance"
        element={
          <Suspense fallback={"loading..."}>
            <ErrorBoundary>
              <FinanceMicroFrontend />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  );
};

export { AppRoutes };
