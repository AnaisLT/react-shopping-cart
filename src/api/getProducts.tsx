import { CartItemType } from '../models/CartItem';

// Get the products from the fakestoreapi.
export const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();
