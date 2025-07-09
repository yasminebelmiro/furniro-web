import axios from "axios";
import type { ProductType } from "../types/ProductType"; // Configurei aqui a URL base da API JSON Server
const api = axios.create({ baseURL: "http://localhost:3000" });
export async function getProducts(): Promise<ProductType[]> {
  const { data } = await api.get<ProductType[]>("/products");
  return data;
} // Busca um único produto por ID

export async function getProductById(
  id: string
): Promise<ProductType | undefined> {
  const prods = await getProducts();
  return prods.find((p) => p.id === id);
}
export default api;
