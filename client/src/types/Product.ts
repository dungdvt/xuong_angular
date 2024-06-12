import { Bid } from "./Bid";
import { Category } from "./Category";

export type Product = {
bidPriceMax: any;
  _id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  isShow: boolean;
  bids: Bid[];
  startAt: string;
  times: string; 
};

export type ProductForm = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isShow: boolean;
};
