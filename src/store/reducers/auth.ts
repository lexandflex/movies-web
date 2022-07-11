import { createReducer } from 'typesafe-actions';

// import { AuthActionUnion } from '../actions/auth';

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  loading: false,
};
export const authReducer = createReducer<AuthState>(initialState);
