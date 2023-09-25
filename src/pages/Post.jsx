import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div>
      <h1>
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
      <img src={post.thumbnailUrl} alt={post.title} />
    </div>
  );
};
export default Post;

export const loaderPost = async ({ params }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.id}`
  );
  if (!data.ok) {
    throw {
      status: data.status,
      statusText: "No encontrado",
    };
  }
  const post = await data.json();
  return { post };
};
