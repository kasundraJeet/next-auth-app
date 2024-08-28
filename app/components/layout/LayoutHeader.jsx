'use client'
import {
  Box,
  Container,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Image from "next/image";


export default  function Header({session}) {
  return (
    <Box as="header" width="100%" py={2}>
      <Container maxW="2xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Image
            src="/logo.png"
            alt="jeet kasundra logo"
            width="40"
            height="42"
          />
          {session ? (
            <HStack spacing={3}>
              <Text fontSize="md">{session.user?.email}</Text>
              <Menu>
                <MenuButton>
                  <Avatar
                    size="sm"
                    name={session.user?.name}
                    src={session.user?.image}
                  />
                </MenuButton>
                <MenuList marginTop={1}>
                  <MenuItem>
                    <Stack spacing={0}>
                      <Text fontSize="sm" color="black">
                        {session.user?.name}
                      </Text>
                      <Text fontSize="xs" color="gray">
                        {session.user?.email}
                      </Text>
                    </Stack>
                  </MenuItem>
                  <MenuItem
                    color="red"
                    icon={<LogOutIcon />}
                    onClick={() => signOut()}
                  >
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ) : (
            <Button as="a" href="/login" colorScheme="gray">
              Login
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

function LogOutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-log-out"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
