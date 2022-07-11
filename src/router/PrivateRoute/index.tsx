import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthenticatedSelector } from '../../store/selectors';

import { PrivateRouteProps } from './types';

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }): ReactElement => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return isAuthenticated ? children : <Navigate to="/" />;
};
