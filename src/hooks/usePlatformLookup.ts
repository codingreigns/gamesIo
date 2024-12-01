import usePlatforms from "./usePlatforms";

const usePlatformLookup = (id?: number) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.find((p) => p.id === id);
  return platform;
};
export default usePlatformLookup;
