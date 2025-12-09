import type { AxiosInstance } from 'axios';

export const setupInterceptors = (instance: AxiosInstance) => {
  // Request
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // if (error.code === 'ERR_NETWORK') {
      //   console.warn('Network error');
      //   if (window.location.pathname !== '/login') {
      //     window.location.href = '/login';
      //   }
      //   return Promise.reject(error);
      // }

      // if (error.response) {
      //   const { status } = error.response;

      //   if (status === 401) {
      //     console.warn('401 Unauthorized — 로그인 필요');
      //     if (window.location.pathname !== '/login') {
      //       window.location.href = '/login';
      //     }
      //   }
      // }

      return Promise.reject(error);
    }
  );
};
