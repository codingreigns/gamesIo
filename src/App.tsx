import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const availb = window.screen.availWidth;
  const [screenWidth, setScreenWidth] = useState(availb);

  useEffect(() => {
    setScreenWidth(availb);
  }, [availb]);
  console.log(availb);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          md: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"red"}>
          nav
        </GridItem>
        {screenWidth > 768 ? <GridItem bg={"blue"}>aside</GridItem> : ""}

        <GridItem area={"main"} bg={"green"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
