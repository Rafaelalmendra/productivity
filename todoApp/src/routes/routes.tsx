import React from "react";
import { Routes, Route } from "react-router-dom";

// views
import { HomeView, DetailsView } from "../views";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/details" element={<DetailsView />} />
    </Routes>
  );
};

export { Routers };
