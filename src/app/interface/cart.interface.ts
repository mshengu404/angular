import { IProduct } from './product.interface'; // Assuming you have a product interface

export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface ICart {
    items: ICartItem[]; // Array of cart items
    totalQuantity: number; // Total number of items in the cart
    totalPrice: number; // Total price of all items in the cart
}
