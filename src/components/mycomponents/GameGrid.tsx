import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AppSpinner from "./AppSpinner";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchGamesCount =
    games?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <div>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<AppSpinner />}
        dataLength={fetchGamesCount}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }}
          padding={"10px"}
          gap={5}
        >
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games?.pages.map((page) => (
            <React.Fragment>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </div>
  );
};

export default GameGrid;
