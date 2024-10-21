import { client } from "@/sanity/lib/client";
import ProductList from "@/components/ProductList";

export const revalidate = 10;

export default async function NewArrivals() {
  const query = `*[_type=='product'] | order(_createdAt desc, updatedAt desc)[0...10]{
    title, description, image, price, "slug": slug.current
  }`;
  
  const products = await client.fetch(query);
  console.log('Fetched Products:', products);

  return(
    <>
    <ProductList products={products} title="New Arrivals" />
    <div className="text-center mt-6 mb-10">
        <a href="/product" className="text-black px-6 py-3 rounded-md text-lg border border-[#613502] hover:bg-[#613502] hover:text-white transition duration-300 ease-in-out">Explore All Products</a>
    </div>
    </>

  ) 

     
}

