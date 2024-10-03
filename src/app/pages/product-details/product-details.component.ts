import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { IProduct } from '../../interface/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'] // Corrected property name to styleUrls
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct | null; // Declare a product property that can be null if not found

  constructor(
    private readonly activatedRoute: ActivatedRoute, // Injecting ActivatedRoute to access route parameters
    private readonly productService: ProductService // Injecting ProductService to fetch product details
  ) { }

  ngOnInit() {
    // Subscribe to route parameters to get the product ID
    this.activatedRoute.params.subscribe(params => {
      const productId = params['id']; // Extract the product ID from the route parameters
      this.getProduct(productId); // Fetch the product using the product ID
    });
  }

  // Method to retrieve the product using the product ID
  private getProduct(productId: string) {
    // Fetch the product from the product service using the ID
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        this.product = product; // Assign the fetched product to the component property
      },
      error: (err) => {
        console.error('Error fetching product:', err); // Handle any error that occurs during the fetch
      },
      complete: () => {
        console.log('Product fetching process completed.'); // Log when the fetching is completed
      }
    });
  }
}
