import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { PrivateRouteProps } from './types';

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }): ReactElement => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/" />;
};
