import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store";
import cropImageUrl from "@/utils/cropImages";
import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";
import AppSpinner from "./AppSpinner";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
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
                onClick={() => setGenreId(genre.id)}
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
