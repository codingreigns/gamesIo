import useGameQueryStore from "@/store";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "../ui/input-group";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate("/");
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input ref={ref} borderRadius={10} placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
