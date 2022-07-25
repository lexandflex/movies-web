import { AppWrapper } from '@components/AppWrapper';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { Navigator } from '@services/navigatorService';
import { FC, ReactElement } from 'react';
import React, {
  Route,
  unstable_HistoryRouter as Router,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import { Main } from '../pages/Main';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FC = (): ReactElement => (
  <Router history={Navigator.history}>
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="movies/*"
          element={
            <PrivateRoute>
              <Link to="/movies">Movies</Link>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppWrapper>
  </Router>
);
