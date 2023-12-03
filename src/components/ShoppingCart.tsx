import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCartContx } from "../context/CartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/priceFormater";
import storeItems from "../data/goods.json";

type ShoppingCartProp = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProp) => {
  const { closeCart, cartItem } = useShoppingCartContx();

  return (
    <Offcanvas onHide={closeCart} show={isOpen} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carts</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {formatCurrency(
              cartItem.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
