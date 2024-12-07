import useTrailer from "@/hooks/useTrailer";
import AppSpinner from "./AppSpinner";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return <AppSpinner />;

  if (error) throw error;
  const videoUri = data?.results[0]?.data[480];
  const imageUri = data?.results[0]?.preview;
  console.log(data);

  return videoUri ? <video src={videoUri} poster={imageUri} controls /> : null;
};

export default GameTrailer;
