import useScreenShots from "@/hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

const GameScreenshots = ({ gameId }: { gameId: number }) => {
  const { data: screenshots, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid
      marginTop={12}
      marginBottom={6}
      gap={3}
      columns={{ base: 1, md: 2 }}
    >
      {screenshots?.results.map((shot) => (
        <Image borderRadius={5} key={shot.id} src={shot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
