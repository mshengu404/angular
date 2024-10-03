import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct } from '../../interface/product.interface';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly _cartService: CartService
  ) { }

  onAddProduct(product: IProduct, quantity: number) {
    this._cartService.addProduct(product, quantity);
  }

  onRemoveProduct(productId: string) {
    this._cartService.removeProduct(productId);
  }

  onUpdateQuantity(productId: string, quantity: number) {
    this._cartService.updateProductQuantity(productId, quantity);
  }

  ngOnInit() {
    console.log(
      `The onOnInit method runs once after Angular has initialized all the component's @Inputs.
      `
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `The onOnChanges method runs after any component inputs have changed.
      `
    )
  }

  ngDoCheck() {
    console.log(
      `The ngDoCheck method runs before every time the component is checked for changes.
      `
    )
  }

  ngAfterContentInit() {
    console.log(
      `The ngAfterContentInit method runs after the component's content has been initialized.
      `
    )
  }

  ngAfterContentChecked() {
    console.log(
      `The ngAfterContentChecked method runs every time the component content has been checked for changes.
      `
    )
  }

  ngAfterViewInit() {
    console.log(
      `The ngAfterViewInit method runs once after the component's view has been initialized.
      `
    )
  }

  ngAfterViewChecked() {
    console.log(
      `The ngAfterViewChecked method runs every time the children in the component's template have been checked for changes.
      `
    )
  }

  ngOnDestroy() {
    console.log(
      `The ngOnDestroy method runs once just before a component is destroyed..
      `
    )
  }

}
