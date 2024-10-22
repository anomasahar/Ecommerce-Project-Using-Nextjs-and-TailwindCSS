import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/components/AddToCartButton";
import RelatedProducts from "@/components/RelatedProducts";

export const revalidate = 10;

export default async function page({params:{slug}}:{params:{slug:string}}) {
  const query = `*[_type=='product'&& slug.current=='${slug}']{
    title, description, image, price,"slug":slug.current,_createdAt
  }[0]`;
  const product = await client.fetch(query);

  return (
    <div>
      <article className="container mx-auto p-6 mt-20 mb-5 flex flex-col lg:flex-row lg:gap-12">
      <div className="relative">
        <Image
          src={urlFor(product.image).url()}
          width={370}
          height={370}
          alt={product.title}
          className="rounded object-cover w-full"
        />
      </div>

      <section className="mt-6 lg:mt-0 w-full lg:w-1/2">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-500 mt-2">${product.price}</p>
        <p className="text-xl sm:text-2xl font-semibold text-green-600 mt-2"></p>
        <p className="text-gray-600 mt-4">
          {product.description}
        </p>

      <AddToCartButton 
            product={{
              slug: product.slug,
              title: product.title,
              description: product.description,
              image: urlFor(product.image).url(),
              price: product.price,
              _createdAt:product._createdAt,
            }}
          />

        <ul className="mt-6 space-y-2 text-gray-600">
          <li>✔️ No-Risk Money Back Guarantee!</li>
          <li>✔️ No Hassle Refunds</li>
          <li>✔️ Secure Payments</li>
        </ul>
        </section>
      </article>

      <RelatedProducts slug={product.slug} />
    </div>

  );
}
