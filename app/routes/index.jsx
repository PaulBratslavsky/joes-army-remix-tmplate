// import { useLoaderData } from "@remix-run/react";
// import { getDataFromStrapi } from "~/api/get-data-from-strapi.server";

// export async function loader() {
//   const response = await getDataFromStrapi("faq-collections/2", "populate=*");
//   return response.json();
// }


export default function HomeRoute() {
  // const { data } = useLoaderData();
  return (
    <div>Welcome to Joe Armys's Remix Starter Base Template</div>
  );
}
