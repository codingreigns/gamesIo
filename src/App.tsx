import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameGrid from "./components/mycomponents/GameGrid";
import GenreList from "./components/mycomponents/GenreList";
import Navbar from "./components/mycomponents/Navbar";
import PlatformSelector from "./components/mycomponents/PlatformSelector";
import SortSelector from "./components/mycomponents/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const availbleWidth = window.screen.availWidth;
  const [screenWidth, setScreenWidth] = useState(availbleWidth);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // console.log(selectedPlatform);

  useEffect(() => {
    setScreenWidth(availbleWidth);
  }, [availbleWidth]);
  // console.log(availbleWidth);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          md: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        {screenWidth > 768 ? (
          <GridItem marginLeft={3} area={"aside"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        ) : (
          ""
        )}

        <GridItem area={"main"}>
          <HStack spaceX={5} maxW={"xs"} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <Show when={screenWidth > 1024}>
              <SortSelector
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                selectedSortOrder={gameQuery.sortOrder}
              />
            </Show>
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
