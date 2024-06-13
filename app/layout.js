import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Interview Mocket",
  description: "Interview Mock With Gemini Api",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
