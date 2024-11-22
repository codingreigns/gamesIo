import useGenres from "@/hooks/useGenres";
import cropImageUrl from "@/utils/cropImages";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import AppSpinner from "./AppSpinner";

const GenreList = () => {
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
            <Text>{genre.name}</Text>
          </HStack>
        </li>
      ))}
    </Box>
  );
};

export default GenreList;
