import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; 
import { Product } from "../../typings"; 

interface ProductListProps {
  products: Product[]; 
  title: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
  return (
    <section className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"> 
            {products.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.slug}>
                <div className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-xl"> {/* Slightly reduced zoom */}
                <div className="relative w-full h-[300px]"> 
                    <Image
                    src={urlFor(product.image).url()}
                    fill
                    alt={product.title}
                    className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-md font-semibold text-center">{product.title}</h3> 
                    <p className="text-gray-500 text-center text-sm mt-1">${product.price}</p> 
                </div>
                </div>
            </Link>
            ))}
        </div>
    </section>
  );
};

export default ProductList;
