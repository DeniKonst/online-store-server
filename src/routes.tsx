import React from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthPage } from "./pages/authPage/authPage";
import RegistrPage from "./pages/registrPage/registrPage";
import HomePage from "./pages/homePage/homePage";
import NewsPage from "./pages/newsPage/newsPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ShopPage from "./pages/shopPage/shopPage";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    );
  } else
    return (
      <Routes>
        <Route path="/registration" element={<RegistrPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
};
