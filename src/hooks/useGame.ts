import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () =>
      apiClient.get<Game>(`/games/${slug}`).then((res) => res.data),
  });
};
export default useGame;
