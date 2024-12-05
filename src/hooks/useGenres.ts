import apiClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import genres from "@/static/genres";
import ms from "ms";
import { Genre } from "../entities/Genre";

const useGenres = () => {
  return useQuery({
    staleTime: ms("24h"),
    initialData: genres,
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
  });
};
export default useGenres;
