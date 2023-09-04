"use client";

import Product from "@/components/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setStartupProduct } from "@/redux/slice/searchSlice";
import { API } from "@/utility/page";

export default function Home() {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(API);
      return data;
    },
  });

  const products = data;

  if (isLoading || !products)
    return (
      <div className="flex justify-center items-center mt-36 font-bold">
        Loading...
      </div>
    );

  dispatch(setStartupProduct(products));

  if (error)
    return (
      <div className="flex justify-center items-center mt-36 font-bold">
        An Error has occurred
      </div>
    );

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-32">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center text-purple-800 -mt-24">Products</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
