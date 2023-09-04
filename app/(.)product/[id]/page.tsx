"use client";
import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { API } from "@/utility/page";
function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAdd = (product: Product | null) => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`${API}/${id}`);
      const product = await res.json();

      setProduct(product);

      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
            {loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
            ) : (
              <div className="flex gap-x-8 h-96">
                {product?.image && (
                  <div className="relative w-72 h-full hidden md:inline">
                    <ProductImage
                      image={product.image}
                      title={product.title}
                      fill
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-700">{product?.title}</h4>
                    <p className="font-medium text-sm"><span>Rs. </span>{product?.price}</p>

                    <div className="flex items-center text-sm my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {/* Display 5 stars but display the rate ones as StarIconOutline  */}
                          {Array.from(
                            { length: Math.floor(product.rating.rate) },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="h-4 w-4 text-green-700"
                              />
                            )
                          )}

                          {/* Display the rest of the stars as StarIconOutline  */}
                          {Array.from(
                            { length: 5 - Math.floor(product.rating.rate) },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className="h-4 w-4 text-green-700"
                              />
                            )
                          )}
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                        See all {product?.rating.count} reviews
                      </p>
                    </div>

                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <button
                      className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"
                      onClick={() => handleAdd(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="button w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
                    >
                      View Product details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
