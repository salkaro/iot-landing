import { IBlog } from '@/models/blog';
import Link from 'next/link';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Badge } from './badge';
import Image from 'next/image';

const BlogCard = ({ slug, post }: { slug: string; post: IBlog }) => {
    return (
        <Link
            href={`/blog/${slug}`}
            className="flex flex-col gap-6 hover:opacity-80 transition"
        >
            {/* Featured Image */}
            <div className="relative w-full rounded-md overflow-hidden">
                <Image src={post.image} alt={post.title} width={1500} height={1500} className='object-cover'/>
            </div>

            {/* Badge & Author */}
            <div className="flex items-center gap-4">
                <Badge>Blog</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>By</span>
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="/logos/logo.svg" />
                        <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <span>Salkaro Team</span>
                </div>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {post.title}
                </h2>
                <p className="text-base text-muted-foreground">
                    {post.description}
                </p>
            </div>
        </Link>
    )
}

export default BlogCard
