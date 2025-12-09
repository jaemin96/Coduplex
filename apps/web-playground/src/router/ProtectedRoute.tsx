import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const checkAuth = () => {
    // const session = sessionStorage.getItem('auth');
    return true;
  };

  return <>{checkAuth() ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
