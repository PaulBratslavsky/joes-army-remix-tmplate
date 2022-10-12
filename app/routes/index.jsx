// import { useLoaderData } from "@remix-run/react";
// import { getStrapiData } from "~/api/posts/get-all-posts.server";

// export async function loader() {
//   const response = await getAllPosts();
//   return response.json();
// }

export default function HomeRoute() {
  // const { data } = useLoaderData();
  return (
    <div>Welcome to Joe Armys's Remix Starter Base Template</div>
  );
}
