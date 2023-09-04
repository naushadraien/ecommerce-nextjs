"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store"; // Import the RootState type
import SearchBar from "./SearchBar";

function Header() {
  // Specify the type of state using RootState
  const { cart } = useSelector((state: RootState) => state);

  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <h2>OnlineStore</h2>
      </Link>


      <SearchBar />

      <div className="flex items-center space-x-2.5 text-sm">
        {/* <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"> */}
        {/* Access the correct property from the state */}
        {/* Items: {cart.cartItems.length}
        </button> */}
        <Link href="/cart">
          <button className="button rounded-full  hover:bg-gray-400 hover:text-gray-50 hover:border-transparent">
            Cart({cart.cartItems.length})
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
