"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store"; // Import the RootState type
import SearchBar from "./SearchBar";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
  // Specify the type of state using RootState
  const { cart } = useSelector((state: RootState) => state);

  const [menu, setMenu] = useState(false);

  return (
    <header className=" sticky top-0 bg-white z-50">
      <div className=" container max-w-full">
        <div className="hidden lg:flex items-center px-4 md:px-12 py-2 justify-between shadow w-full">
          <Link href="/">
            <h2 className="font-extrabold">OnlineStore</h2>
          </Link>

          <SearchBar />

          <div className="flex items-center space-x-2.5 text-sm">
            {/* <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"> */}
            {/* Access the correct property from the state */}
            {/* Items: {cart.cartItems.length}
        </button> */}

            <Link href={"/"}>
              <div className="font-bold button rounded-full  hover:bg-purple-700 hover:text-gray-50 hover:border-transparent">
                Home
              </div>
            </Link>

            <Link href="/cart">
              <button className="button rounded-full  hover:bg-purple-700 hover:text-gray-50 hover:border-transparent">
                Cart({cart.cartItems.length})
              </button>
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden items-center px-4 md:px-12 justify-between w-full py-4">
          <Link href="/">
            <h2 className="font-extrabold">OnlineStore</h2>
          </Link>
          <button onClick={() => setMenu(!menu)}>
            {menu ? (
              <IoMdClose className="text-3xl lg:hidden rotate-90" />
            ) : (
              <RxHamburgerMenu className="text-3xl lg:hidden" />
            )}
          </button>
        </div>
        {menu && (
          <div className="flex flex-col lg:hidden shadow pb-7 space-y-4 justify-center items-center">
            <div className="mt-4">
              <SearchBar />
            </div>

            <div className="block text-sm">
              {/* <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"> */}
              {/* Access the correct property from the state */}
              {/* Items: {cart.cartItems.length}
                  </button> */}

              <Link href={"/"} className="flex my-2">
                <div className="button rounded-full hover:bg-purple-700 hover:text-gray-50 hover:border-transparent">
                  Home
                </div>
              </Link>

              <Link href="/cart">
                <button className="button rounded-full hover:bg-purple-700 hover:text-gray-50 hover:border-transparent">
                  Cart({cart.cartItems.length})
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
