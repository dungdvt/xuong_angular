import { Bid } from "./Bid";

export type Product = {
bidPriceMax: any;
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
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
