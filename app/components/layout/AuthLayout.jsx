import { Box, Container } from "@chakra-ui/react";

export default function AuthLayout({ children }) {
  return (
    <Box as="main" h="100dvh" w="100%" p={2} className="overflow-y-auto">
      <Container
        as="section"
        h="100%"
        maxW="sm"
        w="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
      >
        {children}
      </Container>
    </Box>
  );
}
