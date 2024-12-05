import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 300;

  if (!children) return null;

  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, LIMIT) + "...";
  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        color="colorPalette.600"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
