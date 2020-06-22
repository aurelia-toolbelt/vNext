import { customElement, inject, INode, containerless } from "aurelia";
import template from './at-button.html';
import { IBootstrapV5Options } from "@aurelia-toolbelt/bootstrap-v5-core";
import { RippleCustomAttribute } from '@aurelia-toolbelt/custom-attributes';

export class BaseBootstrapComponent {
    constructor(
        @INode element: Element,
        @IBootstrapV5Options options: IBootstrapV5Options) {
    }
}

export class RippleEffectComponent extends BaseBootstrapComponent {
    constructor(
        @INode element: Element,
        @IBootstrapV5Options options: IBootstrapV5Options) {
        super(element, options);
        if (options.enableRippleEffect) {
        }
    }
}

@customElement({ name: 'at-button', template, dependencies: [RippleCustomAttribute] })
@containerless
export class BootstrapButton extends RippleEffectComponent {
    constructor(
        @INode private element: Element,
        @IBootstrapV5Options private options: IBootstrapV5Options) {
        super(element, options);
    }
    
    afterAttach()
    {
        console.log(this.element); // Call Twice & `<!-- au-end -->`
    }
}