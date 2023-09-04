"use client";
import Product from "@/components/Product";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const { search, startupPokemon } = useSelector(
    (state: RootState) => state.search
  );

  if (!search) return router.push("/"); //if there is no search, it will redirect to the home page

  return (
    <>
      {startupPokemon &&
        startupPokemon
          .filter((product) => {
            if (search.length === 0) {
              return product; //If searchData is an empty string, it returns all the productss of the users array.
            } else {
              return product.title.toLowerCase().includes(search.toLowerCase()); //If searchData has a value, it returns only those productss whose name property includes the search string. The comparison is case-insensitive because both the name and searchData strings are converted to lowercase using the toLowerCase() method before the comparison.
            }
          })
          .map((product) => {
            return (
              <div
                key={product.id}
                className="flex justify-center mt-20 -mb-10"
              >
                <Product {...product} />
              </div>
            );
          })}
    </>
  );
};

export default Search;
