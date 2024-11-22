import { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
// import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  // const iconMap: { [key: string]: IconType } = {
  //   pc: FaWindows,
  //   playstation: FaPlaystation,
  //   xbox: FaXbox,
  //   nintendo: SiNintendo,
  //   mac: FaApple,
  //   linux: FaLinux,
  //   ios: MdPhoneIphone,
  //   web: BsGlobe,
  //   android: FaAndroid,
  // };
  return (
    <HStack>
      {platforms.map((platform) =>
        platform.slug === "pc" ? (
          <FaWindows key={platform.id} />
        ) : platform.slug === "playstation" ? (
          <FaPlaystation key={platform.id} />
        ) : platform.slug === "xbox" ? (
          <FaXbox key={platform.id} />
        ) : platform.slug === "nintendo" ? (
          <SiNintendo key={platform.id} />
        ) : platform.slug === "mac" ? (
          <FaApple key={platform.id} />
        ) : platform.slug === "linux" ? (
          <FaLinux key={platform.id} />
        ) : platform.slug === "ios" ? (
          <MdPhoneIphone key={platform.id} />
        ) : platform.slug === "web" ? (
          <BsGlobe key={platform.id} />
        ) : platform.slug === "android" ? (
          <FaAndroid key={platform.id} />
        ) : (
          ""
        )
      )}
    </HStack>
  );
};

// const CustomIcon = ()=>{
//   return
// }

export default PlatformIconList;
