import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import AppSpinner from "./AppSpinner";
import { Platform } from "@/hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data: platforms, isLoading, error } = usePlatforms();
  const selectedPlatform = platforms?.find((p) => p.id === selectedPlatformId);

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" size="sm">
          {selectedPlatform?.name ? selectedPlatform?.name : "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {isLoading && <AppSpinner />}
        {platforms?.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
            value={platform.slug}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
export default PlatformSelector;
