import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage } from '@module/auth/sign/page';
import ProtectedRoute from './ProtectedRoute';
import { BaseLayout } from '@/layout';
import { SearchPage } from '@module/search/page';
import { HomePage } from '@module/home/page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login route - Placed outside MainLayout */}
        <Route path="/login" element={<SignInPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>

          {/* Viewer */}
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
