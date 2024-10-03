import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { loginGuard } from './guard/login/login.guard';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

/* [Routing helps you change what the user sees in a single page application.]


    NB: [In a single page application, you change what the user sees by showing or hidinng portions 
        of the display that correspond to particular components, rather than going out to the server to get a new page]

    The Router enables navigation by interpreting a browser URL as an instruction to change the view.

    <router-outlet> informs angular to update the application view with the component for the selected route.

    [The order of routes is important because the Router uses a first-match wins strategy when matching routes.
        So more specific routes should be placed above less specific routes. List routes with a static path first
        followed by an empty path route. The wildcard  route comes last because it matches every URL and the Router
        selects it only if no other routes match first.
    ]

    use a route to pass the information to your application components, to do so, you use the withComponentInputBinding feature
    with providerRouter or the bindToComponentInputs option of RouterModule.forRoot..

    Relative paths let you define paths that are relative to the current URL segment.

    [You can configure your routes to lazy load modules, which means that Angular only loads modules as and when needed, rather
        than loading all modules when the application launches.
    ]

    LocationStrategy
    - When the router navigates to a new component view, it updates the browser's location and history with a URL for that view.
    

*/

export const routes: Routes = [
    {
        path: "home",
        title: "Home",
        component: HomeComponent,
        canActivate: [loginGuard]
    },
    {
        path: "products",
        title: "Products",
        component: ProductsComponent
    },
    {
        path: "product/:id",
        title: "Product",
        component: ProductDetailsComponent
    },
    {
        path: "cart",
        title: "Cart",
        component: CartComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: 'full'
    },
    // [A wildcard route is the last route because it matches any URL]
    {
        path: "**",
        component: NotFoundComponent
    }

];
