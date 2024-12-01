import { GameQuery } from "@/App";
import useGenreLookup from "@/hooks/useGenreLookup";
import usePlatformLookup from "@/hooks/usePlatformLookup";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);

  const heading = `${platform?.name || ""}${genre?.name || ""} Games`;
  return (
    <Heading paddingLeft={2} as={"h1"} marginY={2} fontSize={"3xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
