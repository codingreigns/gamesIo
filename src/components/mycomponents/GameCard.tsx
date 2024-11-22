import { Game } from "@/hooks/useGames";
import cropImageUrl from "@/utils/cropImages";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CritcsScore from "./CritcsScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={cropImageUrl(game.background_image)} />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        <Card.Description as={"div"}>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CritcsScore metacritcs={game.metacritic} />
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

// const Demo = () => {
//   return (
//     <Card.Root maxW="sm" overflow="hidden">
//       <Image
//         src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         alt="Green double couch with wooden legs"
//       />
//       <Card.Body gap="2">
//         <Card.Title>Living room Sofa</Card.Title>
//         <Card.Description>
//           This sofa is perfect for modern tropical spaces, baroque inspired
//           spaces.
//         </Card.Description>
//         <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
//           $450
//         </Text>
//       </Card.Body>
//       <Card.Footer gap="2">
//         <Button variant="solid">Buy now</Button>
//         <Button variant="ghost">Add to cart</Button>
//       </Card.Footer>
//     </Card.Root>
//   )
// }
