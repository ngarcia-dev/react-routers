import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const { blogs } = useLoaderData();
    console.log(blogs);

    return (
        <ul>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No blogs found</li>
            )}
        </ul>
    );
};
export default Blog;

export const loaderBlogs = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const blogs = await data.json();
    return { blogs };
};
