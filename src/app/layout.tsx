import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";

// Styles
import "@/styles/globals.css";

// Analytics
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import PageView from "@/components/analytics/PageView";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
                suppressHydrationWarning
            >
                <GoogleAnalytics />
                <Suspense fallback={null}>
                    <PageView />
                </Suspense>
                {children}
            </body>
        </html>
    );
}
