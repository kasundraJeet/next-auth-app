import { Rubik } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from "@/components/provider";
import { Provider } from "@/components/provider/SessionProvider";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Next js authentication app in server side - practice by jeet kasundra",
  description: "This is an awesome Next.js application featuring next-auth for authentication and server side rendering.",
  keywords: "Next.js, SEO, next-auth, authentication, web app",
  verification: {
    google: "6tgXchFkLRjLLhpNFfefI8tbfDUv_vkxoh1IqXf7XJg",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  applicationName: "next-auth-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Provider>
        <SpeedInsights />
          <Providers>{children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
