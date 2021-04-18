import Buttom, { Typography } from '@material-ui/core';
import CartItem from '../CartItem/CartItem';
//Types
import { CartItemType } from '../../models/CartItem';
//Styles
import { CartWrapper } from './Cart.styles';

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  return (
    <CartWrapper>
      <Typography variant="h2">Your Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body2">No items in cart</Typography>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </CartWrapper>
  );
};

export default Cart;
