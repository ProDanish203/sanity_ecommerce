"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { ProductCart } from "@/lib/types";
import { urlFor } from "@/lib/sanity";

export const AddToCart = ({
  currency,
  description,
  image,
  name,
  price,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    id: "kasghd",
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};
