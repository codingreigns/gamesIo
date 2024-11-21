import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "./components/mycomponents/Navbar";

function App() {
  const availbleWidth = window.screen.availWidth;
  const [screenWidth, setScreenWidth] = useState(availbleWidth);

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
      >
        <GridItem area={"nav"}>
          <Navbar />
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
