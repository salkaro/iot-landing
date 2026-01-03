import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/theme-provider";

// Styles
import "@/styles/globals.css";


export default function BlogRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            themes={["light"]}
        >
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
    );
}
