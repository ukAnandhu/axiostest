import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function RelatedProducts({ product }: Props) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        // Fetching products from the same category
        const res = await axiosInstance.get(`/products/category/${product.category}`);
        // Filter out the current product
        if (res.data && res.data.products) {
          const filtered = res.data.products.filter((p: any) => p.id.toString() !== product.id.toString());
          setRelatedProducts(filtered.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (product.category) {
      fetchRelated();
    }
  }, [product.category, product.id]);

  if (loading) return null;
  if (relatedProducts.length === 0) return null;

  return (
    <section className="w-full  py-16 px-4">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-gray-700 text-xl md:text-2xl font-medium tracking-wide">
            RELATED PRODUCTS
          </h2>

          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>

        {/* Products Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5
          gap-6
        ">

          {relatedProducts.map((item) => (
            <div key={item.id} className="group cursor-pointer">

              {/* Image */}
              <div className="overflow-hidden bg-white">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image || (item.images && item.images[0]) || "/placeholder.png"}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="
                        w-full 
                        h-[250px] 
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="pt-3">

                <h3 className="text-sm text-gray-700 truncate">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-gray-800 mt-1">
                  ${item.price}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}