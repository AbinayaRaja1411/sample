import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicFormcontrolsAnchor]'
})
export class DynamicFormcontrolsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
