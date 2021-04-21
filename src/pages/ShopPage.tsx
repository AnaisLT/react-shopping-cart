import { useState } from 'react';
import { useQuery } from 'react-query';
import {
  AppBar,
  Badge,
  IconButton,
  Drawer,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle, ShoppingCart, Close } from '@material-ui/icons';

import {
  Wrapper,
  StyledButton,
  AppBarWrapper,
  AppBarActions,
} from './ShopPage.styles';
import { fetchBooks } from '../api/fetchBooks';
import { CartItemType } from '../models/CartItem';
import Item from '../components/Item/Item';
import Cart from '../components/Cart/Cart';

const ShopPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'Books',
    fetchBooks
  );

  const handleDrawerClose = () => {
    setCartIsOpen(false);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    // Check previous state
    setCartItems((prev) => {
      //Is the item already in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      //Call reduce on previous state. Acc starts as an empty array specified l.49
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Oops... Something went wrong.</div>;

  return (
    <>
      <AppBarWrapper>
        <AppBar className="appbar" position="static">
          <Toolbar className="toolbar">
            <Typography className="title" variant="h6" noWrap>
              BOOKWORM
            </Typography>
            <AppBarActions>
              <StyledButton onClick={() => setCartIsOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItems)} color="error">
                  <ShoppingCart />
                </Badge>
              </StyledButton>
              <StyledButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </StyledButton>
            </AppBarActions>
          </Toolbar>
        </AppBar>
      </AppBarWrapper>
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartIsOpen}
          onClose={() => setCartIsOpen(false)}
        >
          <div className="drawerHeader">
            <IconButton onClick={handleDrawerClose}>{<Close />}</IconButton>
          </div>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <Grid container spacing={2}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default ShopPage;
