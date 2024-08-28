import { Rubik } from "next/font/google";
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Next js authentication app in server side - practice by jeet kasundra",
    description: "This is an awesome Next.js application featuring next-auth for authentication and server side rendering.",
    url: "https://yourappurl.com",
    siteName: "next-auth-app",
    images: [
      {
        url: "https://yourappurl.com/default-image.jpg",
        width: 800,
        height: 600,
        alt: "An image representing Next js authentication app - practice by jeet kasundra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next js authentication app in server side - practice by jeet kasundra",
    description: "This is an awesome Next.js application featuring next-auth for authentication and server side rendering.",
    image: "https://yourappurl.com/default-image.jpg",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
  },
  themeColor: "#62c35e",
  applicationName: "next-auth-app",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Provider>
          <Providers>{children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
