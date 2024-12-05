import Navbar from "@/components/mycomponents/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading size={"6xl"}>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist!"
            : "An unexpected error occcured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
