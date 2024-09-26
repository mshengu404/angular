import { Component } from '@angular/core';
import { IProduct } from '../../interface/product.interface';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[] = [
    {
      "id": "MQ==",
      "name": "Wireless Mouse",
      "price": 25.99
    },
    {
      "id": "Mg==",
      "name": "Bluetooth Headphones",
      "price": 79.99
    },
    {
      "id": "Mw==",
      "name": "Mechanical Keyboard",
      "price": 99.99
    },
    {
      "id": "NA==",
      "name": "USB-C Hub",
      "price": 34.99
    },
    {
      "id": "NQ==",
      "name": "HDMI Cable",
      "price": 12.49
    }
  ]


}
