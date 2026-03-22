import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';
import type { PartiallyOptional } from '@shared/types/common.type';

interface Tokens {
  accessToken: string;
  refreshToken: string | null;
}

export const setTokens = ({ accessToken, refreshToken }: PartiallyOptional<Tokens, 'refreshToken'>) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  if (refreshToken) localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
