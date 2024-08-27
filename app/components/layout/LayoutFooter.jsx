import { Box, Container, Flex, HStack  } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const social_share = [
  {
    icon: "github",
    link: "/",
  },
];

export default function Footer() {
  return (
    <Box as="footer" width="100%" py={2}>
      <Container maxW="4xl">
        <Flex justifyContent="center">
          <HStack  spacing={2}>
            {social_share.map((share, i) => (
              <Link href={share.link} key={i}>
                <SocialIcon
                  as="div"
                  network={share.icon}
                  style={{ height: 32, width: 32, display: "block" }}
                />
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
