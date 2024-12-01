import apiClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
  });
};
export default usePlatforms;
