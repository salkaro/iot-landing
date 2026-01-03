interface Props {
    children: React.ReactNode;
}
const BlogLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="mt-12 mb-96 max-w-2xl mx-auto py-12 px-0 sm:px-4">
            {children}
        </div>
    )
}

export default BlogLayout
