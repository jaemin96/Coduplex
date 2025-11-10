import axiosInstance from '../instance/axiosInstance';

export const boardService = {
  async getAllBoard() {
    const { data } = await axiosInstance.get('/board');
    return data;
  },

  async createBoard() {
    const { data } = await axiosInstance.post('/board');
    return data;
  },
};
