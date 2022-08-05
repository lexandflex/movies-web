import { AppWrapper } from '@components/AppWrapper';
import { Login } from '@pages/Login';
import { Movie } from '@pages/Movie';
import { Register } from '@pages/Register';
import { Navigator } from '@services/navigatorService';
import { FC, ReactElement } from 'react';
import React, {
  Route,
  unstable_HistoryRouter as Router,
  Routes,
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { Collection } from '../pages/Collection';
import { Main } from '../pages/Main';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: FC = (): ReactElement => (
  <Router history={Navigator.history}>
    <AppWrapper>
      <Routes>
        <Route path="movies" element={<Outlet />}>
          <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="collections" element={<Outlet />}>
          <Route path=":name" element={<Collection />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppWrapper>
  </Router>
);
