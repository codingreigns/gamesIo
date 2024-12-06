import { Trailer } from "@/entities/Trailer";
import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useTrailer = (gameId: number) => {
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      apiClient.get<Trailer>(`/games/${gameId}/movies`).then((res) => res.data),
  });
};
export default useTrailer;
