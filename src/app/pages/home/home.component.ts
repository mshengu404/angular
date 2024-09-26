import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { HighlightDirective } from '../../directives/highlight/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  /**
   * When you register a provider at the component level, you get a new instance of the service with
   * each new instance of the component]
   * 
   * NB: 
   *  Declaring a service like this causes the service to always be included in your application
   *    - even if the service is unused.
   * 
   * @NgModule - based applications use the providers field of the @NgModule decorator to provide a service
   * or other Injectable available at the application level.
   *  */
  providers: [ProductService, HighlightDirective]
})
export class HomeComponent {
  constructor(private _router: Router) { }
}
