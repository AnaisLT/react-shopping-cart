import { Button, Typography } from '@material-ui/core';
// Types
import { CartItemType } from '../../models/CartItem';
//Styles
import { ItemWrapper } from './Item.styles';

type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
  <ItemWrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <Typography variant="h3">{item.title}</Typography>
      <Typography variant="body1">{item.description}</Typography>
      <Typography variant="h3">£{item.price}</Typography>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  </ItemWrapper>
);

export default Item;
