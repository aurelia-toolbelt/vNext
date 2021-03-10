import { customElement, INode, containerless, bindable, BindingMode } from "aurelia";
import template from "./at-button.html";
import { ButtonType, IBootstrapV5Options, Size, Variant } from "@aurelia-toolbelt/bootstrap-v5-core";
import { applyRippleEffect, truthyDetector, truthyRecognizer } from "@aurelia-toolbelt/core";

@customElement({ name: "at-button", template })
@containerless()
export class BootstrapButton {
  private atButtonTemplate: Element;
  @bindable({ mode: BindingMode.toView }) public size?: Size = null;
  @bindable({ mode: BindingMode.toView }) public type: ButtonType = ButtonType.Button;
  @bindable({ mode: BindingMode.toView }) public variant: Variant = Variant.Primary;
  @bindable({ mode: BindingMode.toView }) public disabled: boolean = false;
  @bindable({ mode: BindingMode.toView }) public id: string;
  @bindable({ set: v => truthyDetector(v), mode: BindingMode.toView }) public outline: boolean | string = false;
  @bindable({ set: v => truthyDetector(v), mode: BindingMode.toView }) public block: boolean | string = false;

  constructor(
    @INode private element: Element,
    @IBootstrapV5Options private options: IBootstrapV5Options
  ) {
  }

  attached() {
    // this.block = truthyRecognizer(this.element as HTMLElement, { block: this.block });
    this.applyRipple();
    this.applySize();
  }

  private applySize() {
    if (this.options.defaultSize && !this.size) {
      switch (this.options.defaultSize) {
        case Size.ExtraSmall:
        case Size.Small:
          this.resetSize();
          this.size = Size.Small;
          break;
        case Size.Large:
        case Size.ExtraLarge:
          this.resetSize();
          this.size = Size.Large;
          break;
        default:
          this.resetSize();
          this.size = Size.Medium;
      }
    }
  }

  private resetSize() {
    this.atButtonTemplate.classList.remove("btn-sm", "btn-lg");
  }

  private applyRipple() {
    if (this.options.enableRippleEffect) {
      applyRippleEffect(this.atButtonTemplate as HTMLElement);
    }
  }
}
