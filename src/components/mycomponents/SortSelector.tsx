import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import useGameQueryStore from "@/store";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const sortOrders: { value: string; label: string }[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avg Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (o) => o.value === selectedSortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" size="sm">
          Order by: {currentSortOrder?.label || ""}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {/* {isLoading && <AppSpinner />} */}
        {sortOrders?.map((order) => (
          <MenuItem
            key={order.label}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
export default SortSelector;
