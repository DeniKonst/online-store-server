import React from "react";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import OurStory from "./pages/Registr/Registr";
import { AuthPage } from "./pages/authPage/authPage";
import Resipec from "./pages/resipec/resipec";
import News from "./pages/news/news";
import Shop from "./pages/shop/shop";
import Home from "./pages/home/home";
import Registration from "./pages/Registr/Registr";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/resipec" element={<Resipec />} />
        <Route path="/news" element={<News />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
