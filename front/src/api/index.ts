import baseAxios from "axios";
import { Cart, Product, User } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

const axios = baseAxios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const getUser = () => axios.get<User>(`/user`).then((res) => res.data);

export const addUser = (name: string) =>
  axios.post<User>(`/user`, { name }).then((res) => res.data);

export const getProducts = () =>
  axios.get<Product[]>(`/products`).then((res) => res.data);

export const addToCart = (cartId: string, productId: string) =>
  axios.post(`/cart/${cartId}/${productId}`, {}).then((res) => res.data);

export const removeFromCart = (cartId: string, productId: string) =>
  axios.delete(`/cart/${cartId}/${productId}`).then((res) => res.data);

export const clearCart = (cartId: string) =>
  axios.delete(`/cart/${cartId}`).then((res) => res.data);

export const getCart = (cartId: string) =>
  axios.get<Cart>(`/cart/${cartId}`).then((res) => res.data);

export const getSharedWithMeCarts = () =>
  axios.get(`/access`).then((res) => res.data);

export const shareCart = (userName: string) =>
  axios.post(`/access/${userName}`, {}).then((res) => res.data);
