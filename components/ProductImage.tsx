"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  image: string;
  fill?: boolean;
  title: string;
};

function ProductImage({ image, title, fill }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={image}
          alt={title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={image}
          alt={title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;
