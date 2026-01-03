// Local Imports
import { blogs } from "@/components/blogs/blogs";
import BlogLayout from "@/components/layout/BlogLayout";

// External Imports
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

// Utility: convert **bold** to <strong>
function mdToHtml(input: string): string {
    return input.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}


type Props = {
    params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Assuming 'blogs' is an object where each key is a slug
    const blog = blogs[slug];
    if (!blog) return {};

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: [blog.image],
        },
    };
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const blog = blogs[slug];
    if (!blog) return notFound();

    return (
        <BlogLayout>
            <article className="prose prose-invert lg:prose-lg">
                <div className="flex items-center space-x-4 mb-8">
                    <Badge className="text-sm font-semibold rounded-full px-3 py-1" variant="secondary">
                        Info
                    </Badge>
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                </div>

                <h1 className="mt-0 mb-2 text-4xl md:text-5xl font-extrabold leading-tight">{blog.title}</h1>

                <div className="flex items-center gap-4 my-10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="bg-muted p-1 rounded-full">
                            <Avatar className="h-8 w-8 bg-background p-1">
                                <AvatarImage src="/logos/favicon-orange.svg" />
                                <AvatarFallback>SK</AvatarFallback>
                            </Avatar>
                        </div>
                        <span className="font-semibold">Salkaro Team</span>
                    </div>
                </div>

                <div className="w-full overflow-hidden rounded-lg mb-8">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p className="text-lg leading-relaxed mb-10 text-muted-foreground">{blog.description}</p>

                {blog.sections.map((section, idx) => (
                    <section key={idx} className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>

                        {section.image && (
                            <div className="w-full overflow-hidden rounded-md mb-6">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    width={1000}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        )}

                        {section.description && (
                            <p className="italic text-muted-foreground mb-4">{section.description}</p>
                        )}

                        {section.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className="mb-4 leading-relaxed text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: mdToHtml(p) }}
                            />
                        ))}

                        {section.link && (
                            <Link
                                href={section.link}
                                className="inline-block mt-4 font-medium underline hover:no-underline"
                            >
                                {section.linkTitle || "Learn more →"}
                            </Link>
                        )}
                    </section>
                ))}

                <Separator />
                <section className="mt-6">
                    <h1 className="text-lg font-semibold mb-2">Disclaimer</h1>
                    <span className="text-muted-foreground">Are we missing references? Please contact us at <span className="text-foreground">contact@salkaro.com</span></span>
                    <p className="text-muted-foreground my-2">If we have truely missed a reference then it will be added promptly.</p>
                    <p className="text-muted-foreground">Please understand we try our best and are more then happy to give people the credit they deserve.</p>
                </section>
            </article>
        </BlogLayout>
    );
}
