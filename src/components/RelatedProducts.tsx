import { client } from "@/sanity/lib/client";
import ProductList from "./ProductList";

interface RelatedProductsProps {
  slug: string;
}

export default async function RelatedProducts({ slug }: RelatedProductsProps) {

  console.log("Passed Slug:", slug);
  const allProductsQuery = `*[_type == 'product'] | order(slug.current asc){
    title, description, image, price, "slug": slug.current
  }`;

  const allProducts = await client.fetch(allProductsQuery);
  // console.log("All Products:", allProducts);

  const currentIndex = allProducts.findIndex((product: any) => product.slug === slug);
  // console.log("Current Product Index:", currentIndex);

  if (currentIndex === -1) {
    return <p>No related products found.</p>;
  }

  const productsToShow = 2; 

  const beforeProducts = allProducts.slice(Math.max(0, currentIndex - productsToShow), currentIndex);
  const afterProducts = allProducts.slice(currentIndex + 1, currentIndex + 1 + productsToShow);

  const relatedProducts = [...beforeProducts, ...afterProducts];

  return <ProductList products={relatedProducts} title="Related Products" />;
}
