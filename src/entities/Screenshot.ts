export interface ScreenShot {
  results: Shot[];
}

interface Shot {
  id: number;
  image: string;
  width: number;
  height: number;
}
