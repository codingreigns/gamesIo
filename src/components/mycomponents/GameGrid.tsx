import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 3, "2xl": 4 }}
        padding={"10px"}
        gap={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
