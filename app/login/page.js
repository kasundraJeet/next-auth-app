import { AuthLayout } from "@/components/layout";
import {
  Input,
  Button,
  FormControl,
  Stack,
  Divider,
  Text,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
import Link from "next/link";
import ProviderButtons from "./components/ProviderButtons";

export default function LoginPage() {
  return (
    <AuthLayout>
      <p className="text-center"> logo here </p>
      <Stack spacing={10}>
        <form className="space-y-6">
          <div className="space-y-4">
            <FormControl>
              <Input type="email" placeholder="Email address*" />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="100%">
              Continue
            </Button>
          </div>
          <Text fontSize="sm" className="text-center">
            Don&#39; t have an account?{" "}
            <Link href="/" className="text-blue-600">
              Sign Up
            </Link>
          </Text>
        </form>
        <Box position="relative">
          <Divider />
          <AbsoluteCenter bg="white" px="3">
            OR
          </AbsoluteCenter>
        </Box>
        <Stack spacing={3}>
          <ProviderButtons />
        </Stack>
      </Stack>
      <div></div>
    </AuthLayout>
  );
}
