import "./globals.css";
import Footer from "@src/components/Menu/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { MobileContextProvider } from "@context/MobileContext";
import Script from "next/script";

export const metadata = {
  title: "Team .Exe",
  description: "Departmental team of CSE department of NITH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NL977GKTJP"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NL977GKTJP');`}
        </Script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-primary`}>
        <main className="relative w-[100%] min-h-[100svh]">
          <ChakraProvider>
            <MobileContextProvider>
              {children}
              <Footer />
            </MobileContextProvider>
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
