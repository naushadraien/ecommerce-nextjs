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

  if (!search) return router.push("/"); // If there is no search, it will redirect to the home page

  // Filter the products based on the search criteria
  const filteredProducts = startupPokemon.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="flex justify-center items-center mt-10 font-bold text-xl">
        <p>
          Search Result for: <span className="text-purple-700"> {search}</span>
        </p>
      </div>
      <div className="flex justify-center items-center max-lg:flex-col flex-wrap">
        {filteredProducts.length === 0 ? (
          <p className="my-20 font-bold text-xl text-red-500">
            No Results Found!
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="flex justify-between mx-5 my-8">
              <Product {...product} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Search;
