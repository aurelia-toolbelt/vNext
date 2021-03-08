import { customElement, inject, INode, containerless } from "aurelia";
import template from "./at-button.html";
import { IBootstrapV5Options } from "@aurelia-toolbelt/bootstrap-v5-core";

@customElement({ name: "at-toggle", template })
@containerless
export class BootstrapToggle /*extends RippleEffectComponent*/ {
  constructor(
    @INode private element: Element,
    @IBootstrapV5Options private options: IBootstrapV5Options
  ) {
    // super(element, options);
  }

  attached(): void {
    console.log(this.element); // Call Twice & `<!-- au-end -->`
  }
}
