import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={20} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
