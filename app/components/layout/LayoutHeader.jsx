import { Box, Container, Flex } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box as="header" width="100%" py={2}>
      <Container maxW="4xl">
        <Flex justifyContent="space-between" alignItems="center">
        <h2>Jeet Kasundra</h2>
        <Button  colorScheme='gray'>Login</Button>
        </Flex>
      </Container>
    </Box>
  );
}
