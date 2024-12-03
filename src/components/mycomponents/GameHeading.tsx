import useGenreLookup from "@/hooks/useGenreLookup";
import usePlatformLookup from "@/hooks/usePlatformLookup";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenreLookup(genreId);
  const platform = usePlatformLookup(platformId);

  const heading = `${platform?.name || ""}${genre?.name || ""} Games`;
  return (
    <Heading paddingLeft={2} as={"h1"} marginY={4} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
