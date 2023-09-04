"use client";
import { removeFromCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store/store";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const CartItem = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
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
    <div className="flex items-center mt-20 flex-col ">
      <h1 className="font-bold text-2xl">Cart Item</h1>
      <div>
        {cart.cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col my-10 flex-1"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="font-bold md:text-xl text-xs">{item.title}</h3>
            <h4>$({item.price})</h4>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-gray-50 px-2 rounded-md font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
