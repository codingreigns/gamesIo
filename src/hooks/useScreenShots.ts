import { ScreenShot } from "@/entities/Screenshot";
import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useScreenShots = (gameId: number) => {
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      apiClient
        .get<ScreenShot>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
  });
};
export default useScreenShots;
