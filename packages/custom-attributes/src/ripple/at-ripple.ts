import { customAttribute, inject } from "aurelia";
import { applyRippleEffect } from "@aurelia-toolbelt/core";
@customAttribute({ name: "at-ripple" })
@inject(Element)
export class RippleCustomAttribute {
  constructor(private element: Element) {}
  afterAttach(): void {
    const htmlElement = this.element as HTMLElement;
    applyRippleEffect(htmlElement);
  }
}
