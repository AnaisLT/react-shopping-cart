import { useState } from 'react';
import { useQuery } from 'react-query';
import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons';
import { Wrapper } from './App.style';
import { getProducts } from './api/getProducts';
import { CartItemType } from './models/CartItem';

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log('DATA', data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Oops... Something went wrong.</div>;

  return <div className="App">Hello World</div>;
};

export default App;
