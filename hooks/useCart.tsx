import { CartProductType } from "@/app/product/[productid]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast'



type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  hadleAddProductToCart : (product: CartProductType ) => void
  handleRemoveProductFromCart : (product: CartProductType ) => void
  handleCartQtyIncrease : (product: CartProductType ) => void
  handleCartQtyDecrease : (product: CartProductType ) => void
  handleClearCart : () => void
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {

  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null> (null)

  console.log('qty', cartTotalQty);
  console.log('amount', cartTotalAmount);


  useEffect(()=> {
    const cartItems:any = localStorage.getItem('eShopCartItems');
    const cartProducts : CartProductType[] | null = JSON.parse(cartItems)

    setCartProducts(cartProducts)
  },[])

 
  useEffect(()=>{
    const getTotals = () =>{

      if(cartProducts){
        const {total, qty } = cartProducts?.reduce(
          (acc, item)=>{
          const itemTotal = item.price * item.quantity;
  
          acc.total += itemTotal;
          acc.qty += item.quantity;
  
          return acc;
        },{
          total: 0,
          qty: 0
  
        });

        setCartTotalQty(qty);
        setCartTotalAmount(total);

      }
    }

    getTotals();
  },[cartProducts])


  const hadleAddProductToCart = useCallback((product: CartProductType)=> {
    setCartProducts((prev)=> {
      let updateCart;

      if(prev){
        updateCart = [...prev, product]
      } else {
        updateCart = [product];
      }

      toast.success('product added to cart')

      localStorage.setItem('eShopCartItems', JSON.stringify(updateCart))


      return updateCart;  

    })
  }, [])


  const handleRemoveProductFromCart = useCallback((product: CartProductType)=>{
    if(cartProducts){
      const filterProdcuts = cartProducts.filter(
        (item)=> {
          return item.id !== product.id
        })

        setCartProducts(filterProdcuts)
        toast.success('productremoved')

        localStorage.setItem('eShopCartItems', JSON.stringify(filterProdcuts))
    }
  },[cartProducts])


  const handleCartQtyIncrease = useCallback((product: CartProductType )=>{
    let updateCart;

    if(product.quantity === 99){
      return toast.error("ooop! maximum reached")
    }

    if(cartProducts){
      updateCart = [... cartProducts]

      const existingIndex = cartProducts.findIndex((item)=> item.id === product.id )

      if(existingIndex > -1){
        updateCart[existingIndex].quantity =  updateCart[existingIndex].quantity +1
      }

      setCartProducts(updateCart)
      localStorage.setItem('eShopCartItems', JSON.stringify(updateCart))


    }
  },[cartProducts])


  const handleCartQtyDecrease = useCallback((product: CartProductType )=>{
    let updateCart;

    if(product.quantity === 1){
      return toast.error("ooop! maximum reached")
    }

    if(cartProducts){
      updateCart = [... cartProducts]

      const existingIndex = cartProducts.findIndex((item)=> item.id === product.id )

      if(existingIndex > -1){
        updateCart[existingIndex].quantity =  updateCart[existingIndex].quantity -1
      }

      setCartProducts(updateCart)
      localStorage.setItem('eShopCartItems', JSON.stringify(updateCart))


    }
  },[cartProducts])



  const handleClearCart = useCallback(()=>{
    setCartProducts(null)
    setCartTotalQty(0)
    localStorage.setItem("eShopCartItems", JSON.stringify(null))
  },[cartProducts])



  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    hadleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart
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
