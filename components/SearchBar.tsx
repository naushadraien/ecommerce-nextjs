import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/slice/searchSlice";
import { useRouter } from "next/navigation";

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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchData.length) {
      return;
    }
    router.push("/search");
  };

  return (
    <div className="flex mx-1 w-3/4 md:max-w-[25rem] lg:w-[30rem] divide-x-[1px] divide-gray-600 rounded-full shadow-lg ">
      <form
        className="flex mx-1 w-3/4 md:max-w-[25rem] lg:w-[30rem] divide-x-[1px] divide-gray-600 rounded-lg shadow-lg "
        onSubmit={handleSearch}
      >
        <input
          className="h-[26px] max-md:w-36 focus:border-2 border-purple-700 placeholder:text-purple-700 bg-gray-100 flex-1 rounded-full rounded-bl-lg shadow-inner focus:outline-none pl-2 placeholder:italic py-[1px] hover:border"
          type="text"
          placeholder="Search..."
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
