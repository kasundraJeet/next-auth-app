import { Box, Container, Flex , Avatar, Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <Box as="header" width="100%" py={2}>
      <Container maxW="4xl">
        <Flex justifyContent="space-between" alignItems="center">
          <h2>Jeet Kasundra</h2>
          {session ?
            <Avatar size='sm'  name={session.user?.name} src={session.user?.image} /> : <Button colorScheme="gray">Login</Button>}
        </Flex>
      </Container>
    </Box>
  );
}
