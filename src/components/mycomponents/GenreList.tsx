import useGenres, { Genre } from "@/hooks/useGenres";
import cropImageUrl from "@/utils/cropImages";
import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";
import AppSpinner from "./AppSpinner";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      <Heading fontSize={"lg"} marginBottom={2}>
        Genres
      </Heading>
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
                whiteSpace={"normal"}
                textAlign={"left"}
                objectFit={"cover"}
                onClick={() => onSelectedGenre(genre)}
                variant={genre.id === selectedGenreId ? "surface" : "ghost"}
              >
                {genre.name}
              </Button>
            </HStack>
          </li>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
