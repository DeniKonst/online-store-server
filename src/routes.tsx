import React from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthPage } from "./pages/authPage/authPage";
import RegistrPage from "./pages/registrPage/registrPage";
import AutoPage from "./pages/AutoPage/AutoPage";
import VeloPage from "./pages/VeloPage/VeloPage";
import MotoPage from "./pages/MotoPage/MotoPage";
import NewsPage from "./pages/NewsPage/NewsPage";


export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/moto" element={<MotoPage />} />
        <Route path="/velo" element={<VeloPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/auto" element={<AutoPage />} />
        <Route path="*" element={<Navigate to="/auto" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/registration" element={<RegistrPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
