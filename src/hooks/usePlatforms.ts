import apiClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import ms from "ms";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    staleTime: ms("24h"),
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
  });
};
export default usePlatforms;
