import { Box, Container } from "@chakra-ui/react";
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/api/auth/[...nextauth]/route'


export default async function AuthLayout({ children }) {
  const session = await getServerSession(authOptions)


  if(session) {
    redirect("/")
  }

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
