import template from "./at-spinner.html";
import { customElement, INode, containerless } from "aurelia";

import { IBootstrapV5Options } from "@aurelia-toolbelt/bootstrap-v5-core";

@customElement({ name: "at-spinner", template })
@containerless
export class BootstrapSpinner {
  constructor(
    @INode private element: Element,
    @IBootstrapV5Options private options: IBootstrapV5Options
  ) {
    // super(element, options);
  }

  attached() {
  }
}
