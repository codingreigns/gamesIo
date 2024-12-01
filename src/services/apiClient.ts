import axios from "axios";
const rawgApiKey: string | number = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: rawgApiKey!,
  },
});
