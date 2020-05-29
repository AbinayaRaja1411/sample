import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-formcontrols-anchor]'
})
export class DynamicFormcontrolsDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef);
   }
}
