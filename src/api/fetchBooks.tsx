import { CartItemType } from '../models/CartItem';
import { books } from './books';

export const fetchBooks = async (): Promise<CartItemType[]> => {
  return new Promise((resolve) => {
    resolve(books.data || []);
  });
};
