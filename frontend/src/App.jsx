import React from "react";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
};

export default App;
