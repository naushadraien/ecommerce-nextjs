import ProductImage from "@/components/ProductImage";
import { notFound } from "next/navigation";
import { API } from "@/utility/page";
import type { Metadata } from "next";
import { AiOutlineStar } from "react-icons/ai";

type Props = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "OnlineStore - Details",
  description: "OnlineStore Details Page",
};

async function ProductPage({ params: { id } }: Props) {
  try {
    const res = await fetch(`${API}/${id}`);
    const product: Product = await res.json();

    return (
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-32 pb-10">
        <ProductImage image={product.image} title={product.title} />

        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-purple-700">
              {product.title}
            </h1>
            <div className="flex items-center">
              <p className="bg-green-700 text-slate-50 flex justify-center items-center px-1 rounded-lg text-xs py-1 w-12 mr-2">
                {product.rating.rate}{" "}
                <span className="ml-1 text-sm">
                  <AiOutlineStar />
                </span>
              </p>
              <p className="text-blue-600 hover:underline cursor-pointer text-sm">
                {product?.rating.count} Ratings
              </p>
            </div>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
              <span>Rs. </span>{product.price}
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductPage;
