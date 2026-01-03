import UnderDevelopment from "@/components/ui/under-development";

export const metadata = {
    title: "Privacy Policy – Salkaro",
    description:
        "Learn how Salkaro collects, uses, and protects your data. Your privacy is important to us as we help you manage your IoT devices securely and transparently.",
    keywords: [
        "Salkaro privacy",
        "privacy policy",
        "data protection",
        "IoT data privacy",
        "user data",
        "Salkaro GDPR",
        "data security",
        "information usage",
        "Salkaro data policy",
    ],
    openGraph: {
        title: "Privacy Policy – Salkaro",
        description:
            "Review how Salkaro handles your personal and device data to ensure transparency, security, and compliance with privacy laws.",
        url: "https://salkaro.com/privacy",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro Privacy Policy",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salkaro Privacy Policy",
        description:
            "Discover how Salkaro protects your privacy and manages your data while providing secure IoT services.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};

export default function Privacy() {
    return (
        <UnderDevelopment />
    );
}
