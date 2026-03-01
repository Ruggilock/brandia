import type { Metadata } from "next";
import localFont from "next/font/local";
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
      <body className={`${avenir.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
