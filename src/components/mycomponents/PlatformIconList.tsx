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
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? <IconComponent key={platform.id} /> : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
