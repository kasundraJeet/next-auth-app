'use client'
import { Button } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { signIn } from 'next-auth/react'

const providers = [
  {
    icon: "google",
    login:'google',
    btn_name: "Continue with Google",
  },
  {
    icon: "x",
    login:'apple',
    btn_name: "Continue with Apple",
  },
  {
    icon: "discord",
    login:'discord',
    btn_name: "Continue with Discord",
  },
  {
    icon: "github",
    login:'github',
    btn_name: "Continue with Github",
  },
  {
    icon: "facebook",
    login:'facebook',
    btn_name: "Continue with FaceBook",
  },
];

export default function ProviderButtons() {
  return (
    <>
      {providers.map((provider, i) => (
        <Button
         onClick={() => signIn(provider.login)}
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
