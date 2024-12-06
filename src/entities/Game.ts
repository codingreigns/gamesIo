import { Platform } from "@/entities/Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
