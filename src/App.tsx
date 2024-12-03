import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GameGrid from "./components/mycomponents/GameGrid";
import GenreList from "./components/mycomponents/GenreList";
import Navbar from "./components/mycomponents/Navbar";
import PlatformSelector from "./components/mycomponents/PlatformSelector";
import SortSelector from "./components/mycomponents/SortSelector";
import GameHeading from "./components/mycomponents/GameHeading";

function App() {
  const availbleWidth = window.screen.availWidth;
  const [screenWidth, setScreenWidth] = useState(availbleWidth);

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
            <GenreList />
          </GridItem>
        ) : (
          ""
        )}

        <GridItem area={"main"}>
          <GameHeading />
          <HStack spaceX={5} maxW={"xs"} paddingLeft={2} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
