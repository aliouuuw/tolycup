import Link from "next/link";

import { urlFor } from "../lib/client";
import Image from "next/image";

const Product = ({ product: { image, name, slug, price } }) => {

  return (
    <div className="col-span-1 px-[15px] py-10 w-fit mx-auto">
      <Link href={`/product/${slug.current}`} passHref>
        <div className="border h-full p-auto hover:scale-110 transition-transform duration-500">
          <div className="relative h-[300px] w-[250px]">
            <Image
              src={urlFor(image && image[0]).url()}
              alt="Cake image"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
