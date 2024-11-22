import { SkeletonText } from "@/components/ui/skeleton";
import { Card, HStack, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      {/* <Image src={cropImageUrl(game.background_image)} /> */}
      <Skeleton height={"200px"} />
      <Card.Body gap="2">
        {/* <Card.Title>{game.name}</Card.Title> */}
        <SkeletonText noOfLines={1} />
        <Card.Description as={"div"}>
          <HStack justifyContent={"space-between"}>
            <SkeletonText noOfLines={1} width={"75px"} />
            <SkeletonText marginLeft={"90px"} width={"30px"} noOfLines={1} />
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
