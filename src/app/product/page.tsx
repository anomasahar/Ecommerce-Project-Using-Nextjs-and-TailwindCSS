import { client } from "../../sanity/lib/client";
import { Product } from "../../../typings";
import FilterableProduct from "@/components/FilterableProducts";

export const revalidate = 10;

export default async function Home() {
  const query = `*[_type=='product'] | order(_createdAt desc){
    description,title,image,price,
      "slug":slug.current,
      _createdAt
  }`;
  const products: Product[] = await client.fetch(query);

  return (
    <>
      <div className="relative w-full mt-28 sm:mt-20">
        <p className="text-center font-semibold text-lg sm:text-xl underline underline-offset-4 sm:underline-offset-8 decoration-[1px]">
          Get Your Favourite Bag
        </p>
      </div>

      

      {/* Pass products to the client-side component */}
      <div className="mt-8 px-2">
        <FilterableProduct products={products} />
      </div>
    </>
  );
}
