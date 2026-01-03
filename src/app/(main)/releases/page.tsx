import UnderDevelopment from "@/components/ui/under-development";

export const metadata = {
    title: "Product Releases – Salkaro",
    description:
        "Stay up to date with the latest product updates and feature releases from Salkaro. See what’s new in our IoT platform and how it helps you manage devices more effectively.",
    keywords: [
        "Salkaro releases",
        "product updates",
        "feature releases",
        "changelog",
        "IoT updates",
        "new features",
        "firmware updates",
        "platform enhancements",
        "Salkaro news",
    ],
    openGraph: {
        title: "Latest Product Releases – Salkaro",
        description:
            "Discover the newest features, improvements, and firmware updates added to the Salkaro platform. Stay ahead with our latest innovations.",
        url: "https://salkaro.com/releases",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro Releases",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salkaro Changelog & Releases",
        description:
            "Explore the latest updates and product releases from Salkaro to keep your IoT operations running smoothly.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};


export default function Releases() {
    return (
        <UnderDevelopment />
    );
}
