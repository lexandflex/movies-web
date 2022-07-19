import { Login } from '@pages/Login';
import { FC, ReactElement } from 'react';
import React, { Route, BrowserRouter as Router, Routes, Link, Navigate } from 'react-router-dom';
import { Main } from '../pages/Main';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FC = (): ReactElement => {
  console.log('my');
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            <>
              <div>main route</div>
              <Link to="/movies">Movies</Link>
            </>
          }
        /> */}
        <Route path="/" element={<Main />} />
        <Route
          path="movies/*"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
