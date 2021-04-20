import { Button, Typography } from '@material-ui/core';
//Types
import { CartItemType } from '../../models/CartItem';
//Styles
import { CartItemWrapper } from './CartItem.styles';

type CartItemProps = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <CartItemWrapper>
    <div>
      <Typography variant="h4">{item.title}</Typography>
      <div className="information">
        <Typography variant="body1">Price: £{item.price}</Typography>
        <Typography variant="body1">
          Total: £{(item.amount * item.price).toFixed(2)}
        </Typography>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <Typography variant="body2">{item.amount}</Typography>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </CartItemWrapper>
);

export default CartItem;
