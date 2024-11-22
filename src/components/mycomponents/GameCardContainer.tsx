import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const GameCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box width={"300px"} maxW="sm" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
