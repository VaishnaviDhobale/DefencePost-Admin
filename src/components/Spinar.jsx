import { Spinner, Box ,Text} from "@chakra-ui/react";

export function Spinar() {
  return (
    <>
     
        <Box>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text fontWeight={"bold"} fontSize={"21px"}>Loading, please wait...</Text>
        </Box>
    </>
  );
}
