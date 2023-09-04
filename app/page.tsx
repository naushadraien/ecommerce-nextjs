"use client";

import Product from "@/components/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setStartupProduct } from "@/redux/slice/searchSlice";
import { API } from "@/utility/page";
import Loader from "@/components/Loader";

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

  //this method of loading is not perfect
  // if (isLoading || !products)
  // return (
  //   <div className="flex justify-center items-center mt-2 font-extrabold min-h-screen">
  //     <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  //       <div className="animate-pulse flex space-x-4">
  //         <div className="rounded-full bg-slate-200 h-10 w-10"></div>
  //         <div className="flex-1 space-y-6 py-1">
  //           <div className="h-2 bg-slate-200 rounded"></div>
  //           <div className="space-y-3">
  //             <div className="grid grid-cols-3 gap-4">
  //               <div className="h-2 bg-slate-200 rounded col-span-2"></div>
  //               <div className="h-2 bg-slate-200 rounded col-span-1"></div>
  //             </div>
  //             <div className="h-2 bg-slate-200 rounded"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // dispatch(setStartupProduct(products)) //this is moved to below in isLoading condition

  // useEffect(() => {
  //   dispatch(setStartupProduct(products));
  // }, [dispatch, products]);

  if (error)
    return (
      <div className="flex justify-center items-center mt-36 font-bold">
        An Error has occurred
      </div>
    );

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-32">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center text-purple-800 -mt-24">
          Products
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isLoading || !products
            ? Array.from({ length: 20 }, (_, index) => <Loader key={index} />)
            : dispatch(setStartupProduct(products)) &&
              products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
        </div>
      </section>
    </main>
  );
}
