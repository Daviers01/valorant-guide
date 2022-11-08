import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-valorant-bg text-white antialiased relative">
        <div className="container mx-auto p-4">
          <nav className="h-10 fixed">
            <Image
              className="object-contain"
              src="/valorant-logo.png"
              alt=""
              width={50}
              height={50}
            />
          </nav>
          <Image
            className="absolute w-screen p-20 object-fill -z-10 top-0 left-0 right-0"
            src="/valorant-bg.png"
            alt=""
            width={500}
            height={50}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
