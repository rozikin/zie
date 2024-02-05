
import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IPrams {
  productid?: string;
} 

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params)

  const product = products.find((item) => item.id === params.productid)

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div>
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
