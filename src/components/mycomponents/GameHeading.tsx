import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""}${gameQuery.genre?.name || ""} Games`;
  return (
    <Heading paddingLeft={2} as={"h1"} marginY={2} fontSize={"3xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
