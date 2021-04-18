import { useState } from 'react';
import { useQuery } from 'react-query';
import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Wrapper, StyledButton } from './App.styles';
import { getProducts } from './api/getProducts';
import { CartItemType } from './models/CartItem';
import Item from './components/Item/Item';

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log('DATA', data);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((accumulator: number, item) => accumulator + item.amount, 0);
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Oops... Something went wrong.</div>;

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={cartIsOpen}
        onClose={() => setCartIsOpen(false)}
      >
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartIsOpen(true)} />
      <Badge badgeContent={() => getTotalItems(cartItems)} color="error">
        <AddShoppingCartIcon />
      </Badge>
      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
