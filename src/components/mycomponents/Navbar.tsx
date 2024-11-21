import { HStack, Image } from "@chakra-ui/react";

import logo from "@/assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={20} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
