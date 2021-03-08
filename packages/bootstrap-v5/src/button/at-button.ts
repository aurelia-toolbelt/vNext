import { customElement, INode, containerless } from "aurelia";
import template from "./at-button.html";
import { IBootstrapV5Options } from "@aurelia-toolbelt/bootstrap-v5-core";
import { applyRippleEffect } from "@aurelia-toolbelt/core";


@customElement({ name: "at-button", template })
export class BootstrapButton {
  private atButtonTemplate: Element;
  constructor(
    @INode private element: Element,
     @IBootstrapV5Options private options: IBootstrapV5Options
  ) {
  }

  attached() {
    // if (this.options.enableRippleEffect) {
      applyRippleEffect(this.atButtonTemplate as HTMLElement);
    // }
  }
}
