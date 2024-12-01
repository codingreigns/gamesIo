import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameGrid from "./components/mycomponents/GameGrid";
import GenreList from "./components/mycomponents/GenreList";
import Navbar from "./components/mycomponents/Navbar";
import PlatformSelector from "./components/mycomponents/PlatformSelector";
import SortSelector from "./components/mycomponents/SortSelector";
import GameHeading from "./components/mycomponents/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        {screenWidth > 768 ? (
          <GridItem marginLeft={3} area={"aside"}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        ) : (
          ""
        )}

        <GridItem area={"main"}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spaceX={5} maxW={"xs"} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
