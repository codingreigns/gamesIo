export interface Trailer {
  count: number;
  results: Trailers[];
}

interface Trailers {
  id: number;
  name: string;
  preview: string;
  data: Data;
}

interface Data {
  480: string;
  max: string;
}
