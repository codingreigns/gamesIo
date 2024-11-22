import { Badge } from "@chakra-ui/react";

interface Props {
  metacritcs: number;
}
const CritcsScore = ({ metacritcs }: Props) => {
  const color = metacritcs > 80 ? "green" : metacritcs > 70 ? "yellow" : "red";
  return (
    <Badge fontSize={"14px"} ring={"1px"} ringColor={color}>
      {metacritcs}
    </Badge>
  );
};

export default CritcsScore;
