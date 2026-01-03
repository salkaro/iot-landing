import Page from "@/components/ui/contact";

export const metadata = {
    title: "Contact Us – Salkaro",
    description:
        "Have a question or want to get started with Salkaro? Reach out to our team and we’ll help you connect, manage, and scale your IoT devices effectively.",
    keywords: [
        "contact Salkaro",
        "Salkaro support",
        "IoT help",
        "device onboarding",
        "sensor integration",
        "customer support",
        "reach out",
        "tech support",
        "firmware help",
    ],
    openGraph: {
        title: "Contact Salkaro",
        description:
            "Talk to our team to get help with setting up your devices, managing firmware, or learning more about our IoT platform.",
        url: "https://salkaro.com/contact",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro Contact",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Get in Touch – Salkaro",
        description:
            "Need help or have questions about IoT device integration? Contact Salkaro's team today.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};

export default function Contact() {
    return (
        <Page />
    );
}