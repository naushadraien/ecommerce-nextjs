"use client";
import {
  CartItems,
  addToCart,
  deleteProductsFromCart,
  removeAProductFromCart,
} from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store/store";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const CartItem = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state);

  const handleAdd = (item: CartItems) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  if (!cart.cartItems.length)
    return (
      <Link href="/">
        <div className="flex justify-center items-center my-20 font-bold text-2xl">
          Cart is Empty
        </div>
      </Link>
    );

  return (
    <div className="flex mt-20 overflow-hidden lg:mx-10 flex-col">
      <h1 className="font-bold text-2xl flex justify-center items-center">
        Cart Item
      </h1>
      <div className="container grid grid-cols-2">
        {cart.cartItems.map((item, index) => (
          <div
            key={index}
            className="my-10 max-lg:mx-10 flex justify-center items-center max-lg:flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="mb-4 lg:mx-16 hover:scale-110 duration-200"
            />
            <div className="flex flex-col w-40">
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <p className="font-bold lg:text-lg text-md text-purple-700 max-lg:ml-7">
                  {item.title}
                </p>
                <p className="text-slate-500">{item.category}</p>
                <p className="font-bold">RS. {item.price}</p>
              </div>
              {/* <div className=""> */}
              {/* </div> */}
            </div>
            <div className="flex flex-1 justify-center items-center flex-col ">
              <div className="flex justify-center items-center my-2">
                <div
                  className="cursor-pointer rounded-l bg-purple-700 text-white font-bold py-1 px-3.5 duration-100 hover:bg-purple-900 hover:text-blue-50"
                  onClick={() => handleAdd(item)}
                >
                  +
                </div>
                <p className="h-8 w-8 border bg-purple-200 text-center font-bold text-sm flex justify-center items-center">
                  {item.quantity}
                </p>
                <div
                  className="cursor-pointer rounded-r bg-purple-700 text-white font-bold py-1 px-3 duration-100 hover:bg-purple-900 hover:text-blue-50"
                  onClick={() => dispatch(removeAProductFromCart(item.id))}
                >
                  -
                </div>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch(deleteProductsFromCart(item.id)) &&
                    toast.error("Item removed from cart")
                  }
                  className="text-red-500 hover:text-red-700 px-2 rounded-md font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="h-full rounded-lg border bg-white p-6 shadow-md my-20 w-full md:w-[40%] lg:w-[30%]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              Rs {cart.totalPriceofProduct.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">Rs 10.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-purple-700">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                Rs {(cart.totalPriceofProduct + 10.99).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            className="mt-6 w-full bg-purple-700 py-1.5 font-medium text-blue-50 hover:bg-purple-900 duration-100 rounded-md"
            onClick={() =>
              toast.error("Checkout functionality will be added soon!")
            }
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
