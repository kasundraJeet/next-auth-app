import { Button } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

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
          leftIcon={
            <SocialIcon
              network={provider.icon}
              style={{ height: 25, width: 25, display: "block" }}
            />
          }
          colorScheme="blue"
          variant="outline"
          key={i}
        >
          {provider.btn_name}
        </Button>
      ))}
    </>
  );
}
