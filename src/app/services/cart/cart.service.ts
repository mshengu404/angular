import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../../interface/product.interface';
import { ICart, ICartItem } from '../../interface/cart.interface';

/**
 * CartService is responsible for managing the shopping cart's state.
 * It provides methods to add, remove, update, and clear items in the cart.
 * The service uses BehaviorSubject to maintain and emit the current cart state.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Initial cart state
  private _cart: ICart = { items: [], totalQuantity: 0, totalPrice: 0 };

  // BehaviorSubject to hold and emit the current cart state
  private _cartSubject: BehaviorSubject<ICart> = new BehaviorSubject<ICart>(this._cart);

  constructor() { }

  /**
   * Get current cart state as an Observable.
   * Components can subscribe to this to receive updates.
   * @returns An observable of the current cart state.
   */
  getCart(): Observable<ICart> {
    return this._cartSubject.asObservable();
  }

  /**
   * Add a product to the cart.
   * If the product already exists, increase its quantity.
   * If it doesn't exist, add a new entry to the cart.
   * @param product The product to add to the cart.
   * @param quantity The quantity of the product to add (defaults to 1).
   */
  addProduct(product: IProduct, quantity: number = 1): void {
    const cartItem = this._cart.items.find(item => item.product.id === product.id);
    if (cartItem) {
      // If the product already exists in the cart, increase its quantity
      cartItem.quantity += quantity;
    } else {
      // If the product is new, add it to the cart
      this._cart.items.push({ product, quantity });
    }
    this._updateCart(); // Update the cart totals
  }

  /**
   * Remove a product from the cart by its ID.
   * @param productId The ID of the product to remove from the cart.
   */
  removeProduct(productId: string): void {
    // Filter out the product from the cart items
    this._cart.items = this._cart.items.filter(item => item.product.id !== productId);
    this._updateCart(); // Update the cart totals
  }

  /**
   * Update the quantity of a specific product in the cart.
   * If the new quantity is zero or less, remove the product from the cart.
   * @param productId The ID of the product to update.
   * @param quantity The new quantity for the product.
   */
  updateProductQuantity(productId: string, quantity: number): void {
    const cartItem = this._cart.items.find(item => item.product.id === productId);
    if (cartItem) {
      // Update the quantity of the cart item
      cartItem.quantity = quantity;
      // If quantity is zero or less, remove the item
      if (cartItem.quantity <= 0) {
        this.removeProduct(productId);
      } else {
        this._updateCart(); // Update the cart totals if the quantity is valid
      }
    }
  }

  /**
   * Clear all items from the cart.
   */
  clearCart(): void {
    this._cart.items = []; // Reset the items array to an empty state
    this._updateCart(); // Update the cart totals
  }

  /**
   * Calculate the total quantity of items in the cart.
   * @returns The total quantity of items.
   */
  private _calculateTotalQuantity(): number {
    return this._cart.items.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Calculate the total price of items in the cart.
   * @returns The total price of items in the cart.
   */
  private _calculateTotalPrice(): number {
    return this._cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  /**
   * Update the cart totals (total quantity and total price).
   * Emit the updated cart state through the BehaviorSubject.
   */
  private _updateCart(): void {
    // Calculate and update the total quantity and price
    this._cart.totalQuantity = this._calculateTotalQuantity();
    this._cart.totalPrice = this._calculateTotalPrice();

    // Emit the updated cart state
    this._cartSubject.next({ ...this._cart });
  }
}
