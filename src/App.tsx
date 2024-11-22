import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameGrid from "./components/mycomponents/GameGrid";
import GenreList from "./components/mycomponents/GenreList";
import Navbar from "./components/mycomponents/Navbar";
import { Genre } from "./hooks/useGenres";

function App() {
  const availbleWidth = window.screen.availWidth;
  const [screenWidth, setScreenWidth] = useState(availbleWidth);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  useEffect(() => {
    setScreenWidth(availbleWidth);
  }, [availbleWidth]);
  console.log(availbleWidth);
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
        {screenWidth >= 768 ? (
          <GridItem marginLeft={3} area={"aside"}>
            <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        ) : (
          ""
        )}

        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
