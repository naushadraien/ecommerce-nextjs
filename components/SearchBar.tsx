import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/slice/searchSlice";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    // Check if the page is reloading
    // if (performance.navigation.type === 1) {
    //   // Page is reloading, redirect to the home page
    //   router.push("/");
    // }
    dispatch(setSearch(searchData));
  }, [searchData, dispatch]);

  //previously it was like
  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!searchData.length) {
  //     return;
  //   }
  //   router.push("/search");
  // };

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   if (!searchData.length) {
  //     return;
  //   }
  //   router.push("/search");
  // };

  //now after making the button function the below code for handle looks clean
  const button = () => {
    if (!searchData.length) {
      return;
    }
    router.push("/search");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    button();
  };

  const handleSearchButton = () => {
    button();
  };

  return (
    <div className="flex mx-1 justify-center items-center w-3/4 md:max-w-[25rem] lg:w-[30rem] rounded-full">
      <form
        className="flex mx-1 divide-x-[1px] divide-gray-600 rounded-lg shadow-lg border-purple-700 border"
        onSubmit={handleSearch}
      >
        <input
          className="h-[26px] max-md:w-36 focus:border-2 placeholder:text-purple-700 bg-gray-100 flex-1 rounded-lg shadow-inner focus:outline-none pl-2 placeholder:italic py-[1px] "
          type="text"
          placeholder="Search..."
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </form>
      <button
        className=" text-xl text-purple-700 bg-gray-100 px-1 py-1 rounded-lg cursor-pointer border-purple-700 border hover:border-purple-900"
        onClick={handleSearchButton}
      >
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
