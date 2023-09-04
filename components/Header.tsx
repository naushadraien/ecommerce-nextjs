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
        <div className="hidden lg:flex items-center px-4 md:px-12 py-6 justify-between shadow w-full">
          <Link href="/">
            <h2 className="font-extrabold text-purple-800">OnlineStore</h2>
          </Link>

          <SearchBar />

          <div className="flex items-center space-x-3.5 text-sm">
            {/* <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"> */}
            {/* Access the correct property from the state */}
            {/* Items: {cart.cartItems.length}
        </button> */}

            <Link href={"/"}>
              <div className="text-purple-800 font-bold text-lg hover:text-purple-600">
                Home
              </div>
            </Link>

            <Link href="/cart">
              <button className="text-purple-800 font-bold text-lg hover:text-purple-600">
                Cart({cart.cartItems.length})
              </button>
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden items-center px-4 md:px-12 justify-between w-full py-4">
          <Link href="/">
            <h2 className="text-purple-800 font-extrabold">OnlineStore</h2>
          </Link>
          <button onClick={() => setMenu(!menu)}>
            {menu ? (
              <IoMdClose className="text-3xl lg:hidden rotate-90 text-purple-800" />
            ) : (
              <RxHamburgerMenu className="text-3xl lg:hidden text-purple-800" />
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
                <div className="text-purple-800 font-bold text-lg hover:text-purple-600">
                  Home
                </div>
              </Link>

              <Link href="/cart">
                <button className=" text-purple-800 font-bold text-lg hover:text-purple-600">
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
