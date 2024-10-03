import { Component, SimpleChanges } from '@angular/core'; // Removed afterNextRender and afterRender (they are not standard Angular lifecycle hooks)
import { CartService } from '../../services/cart/cart.service';
import { ICart } from '../../interface/cart.interface';
import { IProduct } from '../../interface/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [], // List any necessary imports, such as forms modules or child components
  templateUrl: './cart.component.html', // Path to the HTML template
  styleUrl: './cart.component.css', // Path to the CSS file
  providers: [CartService] // Provides CartService specifically to this component
})

/**
 * CartComponent handles the functionality related to displaying and managing the shopping cart.
 * This includes adding, removing, and updating products in the cart, as well as reacting to lifecycle events.
 */
export class CartComponent {

  // cart property to hold the current state of the shopping cart, including items and totals
  cart!: ICart;

  // Inject CartService to interact with the shopping cart operations
  constructor(private readonly _cartService: CartService) { }

  /**
   * Lifecycle hook that runs once after the component's inputs have been initialized by Angular.
   * Used to initialize data and subscribe to the cart state.
   */
  ngOnInit() {
    console.log(
      `ngOnInit: Runs once after Angular has initialized the component's inputs.`
    );

    // Subscribe to the cart observable to keep the cart state updated in the component
    this._cartService.getCart().subscribe((cart: ICart) => {
      this.cart = cart; // Assign the current cart state to the local cart variable
      console.log(`Current items in the cart: `, this.cart);
    });
  }

  /**
   * Adds a product to the cart by calling the addProduct method from CartService.
   * @param product The product to be added to the cart
   * @param quantity The quantity of the product to add
   */
  onAddProduct(product: IProduct, quantity: number) {
    this._cartService.addProduct(product, quantity); // Call the service to add a product
  }

  /**
   * Removes a product from the cart by calling the removeProduct method from CartService.
   * @param productId The ID of the product to be removed from the cart
   */
  onRemoveProduct(productId: string) {
    this._cartService.removeProduct(productId); // Call the service to remove a product by ID
  }

  /**
   * Updates the quantity of a specific product in the cart.
   * @param productId The ID of the product whose quantity should be updated
   * @param quantity The new quantity to set
   */
  onUpdateQuantity(productId: string, quantity: number) {
    this._cartService.updateProductQuantity(productId, quantity); // Call the service to update product quantity
  }

  /**
   * Clears all items in the cart.
   */
  onClearCart() {
    this._cartService.clearCart(); // Call the service to clear the cart
  }

  /**
   * Lifecycle hook that runs when Angular detects changes to component's input properties.
   * @param changes Object containing information about the changed inputs
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `ngOnChanges: Runs after any component inputs have changed.`
    );
  }

  /**
   * Custom change detection hook that Angular calls to check the component.
   * You can use this hook to detect and act upon changes outside the Angular's default change detection.
   */
  ngDoCheck() {
    console.log(
      `ngDoCheck: Runs before Angular checks the component for changes.`
    );
  }

  /**
   * Lifecycle hook that runs after Angular projects external content into the component's view.
   */
  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit: Runs after the component's content has been initialized.`
    );
  }

  /**
   * Lifecycle hook that runs after Angular checks the projected content in the component.
   */
  ngAfterContentChecked() {
    console.log(
      `ngAfterContentChecked: Runs after Angular has checked the component's content.`
    );
  }

  /**
   * Lifecycle hook that runs after the component's view and its child views have been fully initialized.
   */
  ngAfterViewInit() {
    console.log(
      `ngAfterViewInit: Runs once after the component's view has been initialized.`
    );
  }

  /**
   * Lifecycle hook that runs after Angular checks the component's view and its child views.
   */
  ngAfterViewChecked() {
    console.log(
      `ngAfterViewChecked: Runs every time the component's view has been checked for changes.`
    );
  }

  /**
   * Lifecycle hook that runs right before the component is destroyed.
   * Use this to clean up resources (like unsubscribing from observables).
   */
  ngOnDestroy() {
    console.log(
      `ngOnDestroy: Runs once just before the component is destroyed.`
    );
  }
}
