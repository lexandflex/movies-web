import { FC, ReactElement } from 'react';
import React, { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FC = (): ReactElement => {
  console.log('my');
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>main route</div>
              <Link to="/movies">Movies</Link>
            </>
          }
        />
        <Route
          path="movies/*"
          element={
            <PrivateRoute>
              <>
                <div>Movies route</div>
                <Link to="/">Main</Link>
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
