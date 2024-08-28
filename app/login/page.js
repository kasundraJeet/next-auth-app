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
import Image from "next/image";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div>
        <Text
          as="h1"
          fontSize="x-large"
          opacity="0"
          visibility="hidden"
          className=" absolute left-0 top-0"
        >
          NextAuth.js Example (Server Side) by jeet kasundra{" "}
        </Text>
        <Image src="/logo.png" alt="jeet kasundra logo" width="40" height="42" className="mx-auto" />
      </div>
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
      <div>
        <Text className="text-center">
          Created by
          <Link href="https://jeetkasundra.com" className="underline ml-1">
            Jeet Kasundra
          </Link>
        </Text>
      </div>
    </AuthLayout>
  );
}
