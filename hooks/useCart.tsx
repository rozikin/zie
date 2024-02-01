import { CartProductType } from "@/app/product/[productid]/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  hadleAddProductToCart : (product: CartProductType ) => void
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(10);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null> (null)
  const hadleAddProductToCart = useCallback((product: CartProductType)=> {
    setCartProducts((prev)=> {
      let updateCart;

      if(prev){
        updateCart = [...prev, product]
      } else {
        updateCart = [product];
      }
      return updateCart;

    })
  }, [])

  const value = {
    cartTotalQty,
    cartProducts,
    hadleAddProductToCart
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be within a CartContextProvider");
  }

  return context;
};
