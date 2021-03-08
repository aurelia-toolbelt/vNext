import { customAttribute, INode } from "aurelia";
import { applyRippleEffect } from "@aurelia-toolbelt/core";
@customAttribute({ name: "at-ripple" })
export class RippleCustomAttribute {
  constructor(@INode private element: Element) { }
  attached(): void {
    const htmlElement = this.element as HTMLElement;
    applyRippleEffect(htmlElement);
  }
}
