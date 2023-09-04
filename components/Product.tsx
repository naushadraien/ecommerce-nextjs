import Link from "next/link";
import ProductImage from "./ProductImage";
import { AiOutlineStar } from "react-icons/ai";
function Product({ id, title, price, description, image, rating }: Product) {
  return (
    <>
      <Link
        href={`/product/${id}`}
        className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
      >
        <div className="relative max-h-72 flex-1">
          <ProductImage image={image} title={title} fill />
        </div>

        <div className="font-semibold flex items-center justify-between flex-col mt-4 mb-1">
          <p className="w-44 truncate text-purple-700">{title}</p>
          <p className="italic text-sm w-64 line-clamp-2 text-gray-600 my-1">
            {description}
          </p>
          <div className="flex">
          <p className="bg-green-700 text-slate-50 flex justify-center items-center px-1 rounded-lg text-xs py-1">{rating.rate} <span className="ml-1 text-sm"><AiOutlineStar/></span></p>
          <p className="text-gray-400 font-semibold ml-1">({rating.count})</p>
          </div>
          <p className="text-lg font-bold">
            <span>Rs. </span>
            {price}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Product;
