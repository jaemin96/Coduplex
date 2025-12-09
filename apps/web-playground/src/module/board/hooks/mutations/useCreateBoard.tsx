import { boardService } from '@api/services/boardService';
import { useMutation } from '@tanstack/react-query';

export const useCreateBoard = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: async () => {
      return boardService.createBoard();
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });
};
