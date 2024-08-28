import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#e2f5e1",
      200: "#b8e1b5",
      300: "#8dd48a",
      400: "#62c35e",
      500: "#38b231",
      600: "#2a8f1a",
      700: "#1e6b12",
      800: "#12530a",
      900: "#0a3c00",
    },
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  }
});
