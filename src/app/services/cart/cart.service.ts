import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Dependency Injection is a design pattern and mechanism for creating and delivering some parts of an application to other 
 * parts of an application that require them.
 * 
 * Dependency Injection is wired into the Angular framework and allows classes with Angular decorators, such as Components,
 * Directives, Pipes and Injectables, to configure dependencies that they need.
 * 
 * Two Main roles exist in DI system: Dependency Consumer and Dependency Provider.
 * 
 * Dependency injection is a technique used in object-oriented programming (OOP) to reduce the hardcoded 
 * dependencies between objects. A dependency in this context refers to a piece of code that relies on 
 * another resource to carry out its intended function.
 * 
 * The useClass provider key lets you create and return a new instance of the specified class.
 */
export class CartService {

  constructor() { }
}
