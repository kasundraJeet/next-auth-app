import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { LayoutWrapper } from "@/components/layout";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";



export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <LayoutWrapper session={session}>
      <Container maxWidth="2xl">
        <Box py={8} px={2}>
          <Stack spacing={8}>
            <Stack spacing={3}>
              <Text as="h1" fontWeight="600" fontSize="x-large">
                NextAuth.js Example (Server Side){" "}
                <span className="opacity-0">jeet kasundra</span>
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
            {session && (
              <Box overflow="hidden">
                <SyntaxHighlighter className="rounded-lg" language="json">
                    {JSON.stringify(session, null, 2)}
                </SyntaxHighlighter>
              </Box>
            )}
          </Stack>
        </Box>
      </Container>
    </LayoutWrapper>
  );
}
