import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@scss/base/index.scss";
import ModalWrapper from "@/components/ModalWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        <ModalWrapper>
          <div>{modal}</div>
        </ModalWrapper>
      </body>
    </html>
  );
}
