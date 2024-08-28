"use client";
import { LayoutWrapper } from "@/components/layout";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <LayoutWrapper>
      <Container maxWidth="2xl">
        <Box py={8} px={2}>
          <Stack spacing={8}>
            <Stack spacing={3}>
              <Text as="h1" fontWeight="600" fontSize="x-large">
                NextAuth.js Example (Server Side)
              </Text>
              {session ? (
                <Text as="h2" fontSize="md">
                  Hello, {session.user?.name}! You have successfully logged in.
                </Text>
              ) : (
                <Box py={2}>
                  <Text as="h2" fontSize="lg" color="red.500">
                    You are not logged in. Please log in to continue.
                  </Text>
                </Box>
              )}
            </Stack>
            {session ?  <pre>{JSON.stringify(session, null, 2)}</pre> : null }
          </Stack>
        </Box>
      </Container>
    </LayoutWrapper>
  );
}
