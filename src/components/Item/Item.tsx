import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
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
    <Card className="root">
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          height="700"
          image={item.image}
          title={item.title}
        />
        <CardContent className="book-details">
          <Typography variant="h4">{item.title}</Typography>
          <Typography variant="h5">{item.author}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bottom-container">
        <Typography variant="h5">£{item.price}</Typography>
        <Button
          className="button"
          variant="outlined"
          onClick={() => handleAddToCart(item)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  </ItemWrapper>
);

export default Item;
