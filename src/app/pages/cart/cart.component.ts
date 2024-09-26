import { Component, SimpleChanges, afterNextRender, afterRender } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService]
})

/**
 * 
 * 
 * Every Component must have:
 *  - A typescript class with behaviors such as handling user input and fetching data from a server.
 *  - An HTML template that controls what renders into the DOM.
 *  - A CSS selector that defines how the component is used in HTML.
 * 
 * You provide Angular-specific information for a component by adding a @Component decorator on top 
 * of the Typescript class.
 * 
 * The object passed to the @Component is called the Metadata, this includes the selector, template, and other properties.
 * 
 * @Component's lifecycle is the sequence of steps that happen between the component's creation and destruction.
 * 
 * 1. Constructor - Standard JS class constructor - Runs when Angular instantiates the component.
 * 2. ngOnInit - Runs once after Angular has initialized all the component's @Inputs.
 * 3. ngOnChanges - Runs every time the component's @Inputs have changed.
 * 4. ngDoCheck - Runs every time this component is checked for changes.
 * 5. ngAfterContentInit - Runs once after the component's content has been initialized.
 * 6. ngAfterContentChecked - Runs every time the component content has been checked for changes.
 * 7. ngAfterViewInit - Runs once after the component's view has been initialized.
 * 8. ngAfterViewChecked - Runs every time the component's view has been checked for changes.
 * 9. afterNextRender - Runs once the next time that all components have been rendered to the DOM.
 * 10. afterRender - Runs every time all components have been rendered to the DOM.
 * 11. ngOnDestroy - Runs once before the component is destroyed.
 * 
 * 
 * 
 */

export class CartComponent {

  constructor(private readonly _cartService: CartService) {
    // afterNextRender({
    //   write: () => {
    //     return "";
    //   },
    //   read: () => {

    //   }
    // });
  }

  ngOnInit() {
    console.log(
      `The onOnInit method runs after Angular has initialized all the component's inputs with their initial values.
      A component's ngOnInit runs exactly once.
      `
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `The onOnChanges method runs after any component inputs have changed.
      `
    )
  }

  ngDoCheck() { }

  ngAfterContentInit() { }

  ngAfterContentChecked() { }

  ngAfetrViewInit() { }

  ngAfterViewChecked() { }

  ngOnDestroy() { }


}
