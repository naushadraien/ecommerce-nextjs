import Link from "next/link";
import ProductImage from "./ProductImage";

function Product({ id, title, price, description, image }: Product) {
  return (
    <>
      <Link
        href={`/product/${id}`}
        className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
      >
        <div className="relative max-h-72 flex-1">
          <ProductImage image={image} title={title} fill />
        </div>

        <div className="font-semibold flex items-center justify-between mt-4 mb-1">
          <p className="w-44 truncate">{title}</p>
          <p>${price}</p>
        </div>

        <p className="italic text-xs w-64 line-clamp-2 text-gray-600">
          {description}
        </p>
      </Link>
    </>
  );
}

export default Product;
