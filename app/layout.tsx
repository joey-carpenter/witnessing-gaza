import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const serif = Newsreader({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

const sans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Witnessing Gaza",
    description:
        "Plestia, Hossam, Anas — three Palestinian journalists, and the language used to bury them.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} ${sans.variable} h-full bg-[#faf3ec] antialiased`}
        >
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}
