import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './layouts/HeaderLayout';
import { AuthProvider } from './context/AuthContext';
import { Login } from './features/Login';
import { Products } from './features/Products';
import { ProductDetails } from './features/ProductDetails';
import { RequireAuth } from './features/Login';
import { NotFound } from './features/NotFound';

import './styles/global.less';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to='/products' replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<HeaderLayout />}>
            <Route index element={<Products />} />
            <Route
              path=':productId'
              element={
                <RequireAuth>
                  <ProductDetails />
                </RequireAuth>
              }
            />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
