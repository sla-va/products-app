import { useAuth } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

export function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user?.username) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
}
