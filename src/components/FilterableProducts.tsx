"use client"; 

import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import Filter from "@/components/FilterComponent";
import { Product } from "../../typings";

interface FilterableProductProps {
  products: Product[];
}

export default function FilterableProduct({ products }: FilterableProductProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filter, setFilter] = useState<string>("default");

  useEffect(() => {
    let sortedArray = [...products];

    if (filter === "low to high") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (filter === "high to low") {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (filter === "default") {
        sortedArray.sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime());
    }

    setFilteredProducts(sortedArray);
  }, [filter, products]);

  return (
    <>
      <div className="flex justify-end items-center">
        <div className="mr-4">
        <Filter onFilterChange={setFilter} />
        </div>
        
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
        {filteredProducts.map((product) => (
          <BlogCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
