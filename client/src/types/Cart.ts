import { ProductsData } from "./Products";

export type CartContent = {
    items: Array<ProductsData>,
    totalAmount: number ,
    totalItems: number,
}