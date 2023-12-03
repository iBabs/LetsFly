import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuant: (id: number) => number;
  increaseItemQuant: (id: number) => void;
  decreaseItemQuant: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity: number;
  cartItem: CartItem[];
};
type ShoppingCartProvProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContx() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProv({ children }: ShoppingCartProvProps) {
  const [cartItem, setItem] = useLocalStorage<CartItem[]>("shoping-cart",[]);
  const [isOpen, setIsOpen] = useState(false);
  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuant(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseItemQuant(id: number) {
    setItem((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemQuant(id: number) {
    setItem((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    // setItem((currentItem) => {
    //   currentItem.filter((item) => item.id !== id);
    // });
    setItem((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuant,
        increaseItemQuant,
        decreaseItemQuant,
        removeItem,
        cartItem,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
}
