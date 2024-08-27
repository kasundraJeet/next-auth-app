import { Box } from "@chakra-ui/react";
import Footer from "./LayoutFooter";
import Header from "./LayoutHeader";

export default function LayoutWrapper({ childern }) {
  return (
    <Box
      as="main"
      display="flex"
      h="100dvh"
      w="100%"
      flexDirection="column"
      className="divide-y divide-gray-400"
    >
        <Header />
      <Box as="section" h="100%" w="100%" className="overflow-y-auto">
        {childern}
      </Box>
      <Footer />
    </Box>
  );
}
