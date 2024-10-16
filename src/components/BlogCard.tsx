import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../typings";
import AddToCartButton from "./AddToCartButton";

export default function BlogCard({product}:{product:Product}) {
  return (
    
    <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700 px-4 sm:px-0">
        <div className="relative max-h-76 flex-1">
          <Link href={`/product/${product.slug}`} >
            <Image
            src={urlFor(product.image).url()}
            alt=""
            fill
            className="object-cover rounded-t"
            />
          </Link>
        </div>
        
        <div className="flex flex-col justify-between gap-y-4  p-4">
            <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
            {product.title}
            </h2>
            <p className="text-dark/70 dark:text-light/70 line-clamp-3">
            ${product.price}
            </p>
        </div>

        <div className="flex justify-center mb-4 sm:mb-2 lg:mb-6">
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
        </div>
        
    </section> 
  );
}
