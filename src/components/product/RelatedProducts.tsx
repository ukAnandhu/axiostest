import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
}

interface Props {
  product: Product;
}

export default function RelatedProducts({ product }: Props) {
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
            <Link href={`/product/${product.id}`} key={product.id}>
              
              <div className="group cursor-pointer">

                {/* Image */}
                <div className="overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={500}
                    className="
                      w-full 
                      h-auto 
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Product Info */}
                <div className="pt-3">

                  <h3 className="text-sm text-gray-700">
                    {product.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-800 mt-1">
                    ${product.price}
                  </p>

                </div>

              </div>

            </Link>

        </div>

      </div>

    </section>
  );
}