import { customElement, inject, INode } from "aurelia";
import template from './at-button.html';
import { IBootstrapV4Options } from "@aurelia-toolbelt/bootstrap-v4-core";
import { RippleCustomAttribute } from '@aurelia-toolbelt/custom-attributes';
import { inherits } from "util";


export class BaseBootstrapComponent{
    constructor(
        @INode element:Element,
        @IBootstrapV4Options options: IBootstrapV4Options) {    
    }
}

export class RippleEffectComponent extends BaseBootstrapComponent{
    constructor(
        @INode element:Element,
        @IBootstrapV4Options options: IBootstrapV4Options) {

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
        @IBootstrapV4Options options: IBootstrapV4Options) {

        super(element, options);
    }
}