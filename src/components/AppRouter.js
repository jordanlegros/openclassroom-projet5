import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/APropos";
import NotFound from "../pages/NotFound";
import CardPage from "../pages/CardPage.js";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;