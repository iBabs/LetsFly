import { Button, Stack } from "react-bootstrap";
import { useShoppingCartContx } from "../context/CartContext";
import storeItems from "../data/goods.json";
import { formatCurrency } from "../utilities/priceFormater";

type CartItemProp = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProp) => {
  const { removeItem } = useShoppingCartContx();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      {/* 08170139728 */}
      <img
        src={item.img_url}
        alt={item.name}
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
        {item.name} {quantity > 1 &&<span className="muted" style={{fontSize:"12px"}}>x{quantity}</span>}
        </div>
        <div className="text-muted" style={{fontSize:"16px"}}>
            {formatCurrency(item.price)}
        </div>
      </div>
      <div>
      {formatCurrency(item.price *quantity) }
      </div>
      <Button variant='outline-danger' size="sm" onClick={()=>{removeItem(item.id)}}>X</Button>
    </Stack>
  );
};

export default CartItem;
