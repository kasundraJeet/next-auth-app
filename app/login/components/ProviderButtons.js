'use client'
import { Button } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { signIn } from 'next-auth/react'

const providers = [
  {
    icon: "google",
    btn_name: "Continue with Google",
  },
  {
    icon: "discord",
    btn_name: "Continue with Discord",
  },
  {
    icon: "github",
    btn_name: "Continue with Github",
  },
  {
    icon: "facebook",
    btn_name: "Continue with FaceBook",
  },
  {
    icon: "x",
    btn_name: "Continue with Twitter",
  },
];

export default function ProviderButtons() {
  return (
    <>
      {providers.map((provider, i) => (
        <Button
         onClick={() => signIn(provider.icon)}
          leftIcon={
            <SocialIcon
              as="div"
              network={provider.icon}
              style={{ height: 25, width: 25, display: "block" }}
            />
          }
          colorScheme="brand"
          variant="outline"
          key={i}
        >
        {provider.btn_name}
        </Button>
      ))}
    </>
  );
}
