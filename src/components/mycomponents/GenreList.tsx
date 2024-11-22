import useGenres, { Genre } from "@/hooks/useGenres";
import cropImageUrl from "@/utils/cropImages";
import { Box, Button, HStack, Image } from "@chakra-ui/react";
import AppSpinner from "./AppSpinner";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <Box as={"ul"} listStyleType={"none"} paddingY={"5px"}>
      {isLoading && <AppSpinner />}
      {genres?.map((genre) => (
        <li key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={cropImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant={genre.id === selectedGenre?.id ? "surface" : "ghost"}
            >
              {genre.name}
            </Button>
          </HStack>
        </li>
      ))}
    </Box>
  );
};

export default GenreList;
