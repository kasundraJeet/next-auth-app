import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box as="footer" width="100%" py={2}>
      <Container maxW="4xl">
        <Flex justifyContent="center">
          <HStack spacing={2}>
            <Text>
              Created by
              <Link href="https://jeetkasundra.com" className="underline ml-1">
                Jeet Kasundra
              </Link>
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
