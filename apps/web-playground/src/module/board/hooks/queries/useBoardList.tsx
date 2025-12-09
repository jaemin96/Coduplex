import { boardService } from '@api/services/boardService';
import { useQuery } from '@tanstack/react-query';

export const useBoardList = (enabled = true) => {
  return useQuery({
    queryKey: ['getAllBoard'],
    queryFn: async () => {
      const data = await boardService.getAllBoard();
      return data ? data : [];
    },
    enabled,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
