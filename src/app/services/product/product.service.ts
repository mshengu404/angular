import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IProduct } from '../../interface/product.interface';

@Injectable({
  providedIn: 'root' // This ensures the service is provided at the root level and available throughout the application
})
export class ProductService {
  // Predefined list of products
  private products: IProduct[] = [
    {
      id: "MQ==", // Base64 encoded ID (optional - could be decoded later if needed)
      name: "Wireless Mouse",
      price: 25.99
    },
    {
      id: "Mg==",
      name: "Bluetooth Headphones",
      price: 79.99
    },
    {
      id: "Mw==",
      name: "Mechanical Keyboard",
      price: 99.99
    },
    {
      id: "NA==",
      name: "USB-C Hub",
      price: 34.99
    },
    {
      id: "NQ==",
      name: "HDMI Cable",
      price: 12.49
    }
  ];

  constructor() { }

  /**
   * Returns an observable containing the list of products.
   * In a real-world application, this would likely be replaced with an HTTP call to fetch products from an API.
   */
  getProducts(): Observable<IProduct[]> {
    return of(this.products); // Emit the list of products as an observable
  }

  /**
   * Retrieves a product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns An observable containing the product or null if not found.
   */
  getProductById(id: string): Observable<IProduct | null> {
    const product = this.products.find(product => product.id === id) || null;
    return of(product); // Emit the found product or null
  }

  /**
   * Adds a new product to the list.
   * @param product - The product to add.
   * @returns An observable of the added product.
   */
  addProduct(product: IProduct): Observable<IProduct> {
    this.products.push(product); // Add the new product to the list
    return of(product); // Emit the added product
  }

  /**
   * Updates an existing product.
   * @param id - The ID of the product to update.
   * @param updatedProduct - The updated product data.
   * @returns An observable of the updated product or null if not found.
   */
  updateProduct(id: string, updatedProduct: IProduct): Observable<IProduct | null> {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct }; // Update the product
      return of(this.products[index]); // Emit the updated product
    }
    return of(null); // Emit null if the product was not found
  }

  /**
   * Deletes a product by its ID.
   * @param id - The ID of the product to delete.
   * @returns An observable indicating whether the deletion was successful.
   */
  deleteProduct(id: string): Observable<boolean> {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.id !== id); // Filter out the product to delete
    return of(this.products.length < initialLength); // Emit true if a product was deleted
  }
}
