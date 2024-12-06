import AppSpinner from "@/components/mycomponents/AppSpinner";
import ExpandableText from "@/components/mycomponents/ExpandableText";
import GameAtrributes from "@/components/mycomponents/GameAtrributes";
import GameScreenshots from "@/components/mycomponents/GameScreenshots";
import GameTrailer from "@/components/mycomponents/GameTrailer";
import useGame from "@/hooks/useGame";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <AppSpinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAtrributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
