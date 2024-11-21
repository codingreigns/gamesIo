import { HStack, Image } from "@chakra-ui/react";

import logo from "@/assets/Logo/logo.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={20} />
    </HStack>
  );
};

export default Navbar;
