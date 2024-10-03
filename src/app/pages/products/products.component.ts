import { Component, SimpleChanges } from '@angular/core';
import { IProduct } from '../../interface/product.interface';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent], // Import necessary child components
  templateUrl: './products.component.html', // Path to the HTML template
  styleUrl: './products.component.css' // Path to the CSS file
})
export class ProductsComponent {
  products: IProduct[] = []; // Array to hold the list of products
  private readonly _destroy$ = new Subject<void>(); // Subject used for handling unsubscriptions

  // Inject services: CartService for cart operations, ProductService for fetching products
  constructor(
    private readonly _cartService: CartService,
    private readonly _productService: ProductService
  ) { }

  /**
   * ngOnInit lifecycle hook is called once the component is initialized.
   * Ideal place to load the products or perform initialization tasks.
   */
  ngOnInit() {
    console.log(
      `ngOnInit: Component initialization complete, fetching products.`
    );
    this.getProducts(); // Fetch the products
  }

  /**
   * ngOnChanges lifecycle hook is called when any data-bound property changes.
   * @param changes SimpleChanges object containing the changed properties
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `ngOnChanges: Component input properties changed.`,
      changes
    );
  }

  /**
   * ngDoCheck lifecycle hook allows you to manually check for changes.
   */
  ngDoCheck() {
    console.log(
      `ngDoCheck: Custom change detection.`
    );
  }

  /**
   * ngAfterContentInit lifecycle hook is called after Angular projects external content into the component's view.
   */
  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit: Content projection complete.`
    );
  }

  /**
   * ngAfterContentChecked lifecycle hook is called after every check of the component's projected content.
   */
  ngAfterContentChecked() {
    console.log(
      `ngAfterContentChecked: Content checked.`
    );
  }

  /**
   * ngAfterViewInit lifecycle hook is called after the component's view has been fully initialized.
   */
  ngAfterViewInit() {
    console.log(
      `ngAfterViewInit: View initialization complete.`
    );
  }

  /**
   * ngAfterViewChecked lifecycle hook is called after every check of the component's view.
   */
  ngAfterViewChecked() {
    console.log(
      `ngAfterViewChecked: View checked.`
    );
  }

  /**
   * ngOnDestroy lifecycle hook is called right before the component is destroyed.
   * Used to clean up subscriptions and resources.
   */
  ngOnDestroy() {
    console.log(
      `ngOnDestroy: Cleaning up before component is destroyed.`
    );
    this._destroy$.next(); // Emit value to trigger unsubscription
    this._destroy$.complete(); // Complete the subject to release resources
  }

  /**
   * Method to fetch products from the ProductService.
   * The takeUntil operator ensures that the subscription is automatically unsubscribed when the component is destroyed.
   */
  private getProducts(): void {
    this._productService.getProducts()
      .pipe(takeUntil(this._destroy$)) // Automatically unsubscribe on destroy
      .subscribe({
        next: (products: IProduct[]) => this.products = products, // Assign products to the local array
        error: (err: any) => console.error('Error fetching products:', err), // Log any errors
        complete: () => console.log('Product fetching completed.') // Optional: log when fetching is complete
      });
  }

}
