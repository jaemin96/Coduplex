import axiosInstance from '../instance/axiosInstance';
import { setTokens, clearTokens } from '../storage/tokenStorage';

export interface LoginPayload {
  idValue: string;
  pwValue: string;
  nameValue?: string;
  emailValue?: string;
}

export interface AuthResponse {
  //   accessToken: string;
  //   refreshToken?: string;
  //   user: {
  //     id: string;
  //     name: string;
  //     email: string;
  //   };
  result: boolean;
  strAlert?: string;
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>('/member/login', payload);
    console.log({ data });

    // const tokens = { accessToken: data.accessToken, refreshToken: data.refreshToken };
    // setTokens(tokens);
    return data;
  },

  async logout() {
    await axiosInstance.post('/member/logout');
    clearTokens();
  },

  async refresh() {
    const refreshToken = localStorage.getItem('service_refresh_token');
    if (!refreshToken) throw new Error('No refresh token');
    const { data } = await axiosInstance.post('/member/refresh', { refreshToken });
    const tokens = { accessToken: data.accessToken, refreshToken: data.refreshToken };
    setTokens(tokens);
    return data;
  },
};
