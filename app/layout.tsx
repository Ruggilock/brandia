import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const avenir = localFont({
  src: [
    { path: "./fonts/Avenir_Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Avenir_Book.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Avenir_Regular.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Avenir_Heavy.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Avenir_Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-avenir",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Brandia — Tu marca registrada en simples pasos",
  description:
    "Brandia une la inteligencia artificial con la visión creativa y estratégica de Probrands para que cada emprendedor tenga acceso a un proceso profesional, ágil y completamente transparente de registro de marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${avenir.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
