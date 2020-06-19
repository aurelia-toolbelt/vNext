import { customElement, inject, INode } from "aurelia";
import template from './at-button.html';
import { IBootstrapV5Options } from "@aurelia-toolbelt/bootstrap-v5-core";
import { RippleCustomAttribute } from '@aurelia-toolbelt/custom-attributes';
import { inherits } from "util";


export class BaseBootstrapComponent{
    constructor(
        @INode element:Element,
        @IBootstrapV5Options options: IBootstrapV5Options) {    
    }
}

export class RippleEffectComponent extends BaseBootstrapComponent{
    constructor(
        @INode element:Element,
        @IBootstrapV5Options options: IBootstrapV5Options) {

        super(element, options);

        if (options.enableRippleEffect) {
            element.setAttribute("at-ripple","");
        }
    }
 }


@customElement({ name: 'at-button', template, dependencies: [RippleCustomAttribute] })
export class BootstrapButton extends RippleEffectComponent {
    constructor(
        @INode element:Element,
        @IBootstrapV5Options options: IBootstrapV5Options) {

        super(element, options);
    }
}