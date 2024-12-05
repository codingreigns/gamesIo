import GameGrid from "@/components/mycomponents/GameGrid";
import GameHeading from "@/components/mycomponents/GameHeading";
import GenreList from "@/components/mycomponents/GenreList";
import PlatformSelector from "@/components/mycomponents/PlatformSelector";
import SortSelector from "@/components/mycomponents/SortSelector";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const HomePage = () => {
  const availbleWidth = window.screen.availWidth;
  const [screenWidth, setScreenWidth] = useState(availbleWidth);

  useEffect(() => {
    setScreenWidth(availbleWidth);
  }, [availbleWidth]);
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: ` "aside main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
  );
};

export default HomePage;
