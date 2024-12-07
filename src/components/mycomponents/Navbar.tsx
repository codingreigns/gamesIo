import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image objectFit={"cover"} src={logo} boxSize={20} />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
