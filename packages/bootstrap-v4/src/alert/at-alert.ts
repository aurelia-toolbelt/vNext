import { customElement } from "aurelia";
import template from './at-alert.html';
import { IBootstrapOptions } from '@aurelia-toolbelt/bootstrap-core';

@customElement({ name: 'at-alert', template })
export class BootstrapAlert {
    /*
    DOES NOT WORK!
    constructor(@IBootstrapOptions options: IBootstrapOptions) {
        console.log(options); // log twice!!!
    }
    */
}