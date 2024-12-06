import { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CritcsScore from "./CritcsScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAtrributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaScore">
        <CritcsScore metacritcs={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>

      <DefinitionItem term="Publisher">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAtrributes;
