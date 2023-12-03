import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/priceFormater.tsx";
import { useShoppingCartContx } from "../context/CartContext.tsx";
type GoodsCardProps = {
  id: number;
  name: string;
  price: number;
  img_url: string;
};

const GoodsCard = ({ id, name, price, img_url }: GoodsCardProps) => {
  const {getItemQuant ,increaseItemQuant, decreaseItemQuant, removeItem} = useShoppingCartContx()
  const quantity = getItemQuant(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={img_url}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column ">
        <Card.Title className="d-flex  justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseItemQuant(id)}>+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={()=>decreaseItemQuant(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in Cart
                </div>
                <Button onClick={()=>increaseItemQuant(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={()=>removeItem(id)}>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default GoodsCard;
