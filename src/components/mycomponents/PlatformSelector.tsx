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

const PlatformSelector = () => {
  const { data: platforms, isLoading, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" size="sm">
          <BsChevronDown />
          Platforms
        </Button>
      </MenuTrigger>
      <MenuContent>
        {isLoading && <AppSpinner />}
        {platforms?.map((platform) => (
          <MenuItem key={platform.id} value="">
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
export default PlatformSelector;
