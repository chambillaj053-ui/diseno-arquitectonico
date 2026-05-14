import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diseño Arquitectónico | Galería Estudiantil",
  description: "Galería virtual de trabajos estudiantiles de la especialidad de Diseño Arquitectónico - Nivel Secundario",
  keywords: ["diseño arquitectónico", "estudiantes", "secundaria", "galería", "proyectos", "arquitectura"],
  authors: [{ name: "Especialidad de Diseño Arquitectónico" }],
  icons: {
    icon: "/favicon-arch.png",
  },
  openGraph: {
    title: "Diseño Arquitectónico | Galería Estudiantil",
    description: "Galería virtual de trabajos estudiantiles de la especialidad de Diseño Arquitectónico",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
