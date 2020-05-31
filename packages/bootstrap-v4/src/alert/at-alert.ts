import { customElement } from "aurelia";
import * as viewDef from './at-alert.html';
// import { IBootstrapOptions } from '@aurelia-toolbelt/bootstrap-v4-core';

@customElement({ name: 'at-alert', ...viewDef })
export class BootstrapAlert {
    /*
    DOES NOT WORK!
    constructor(@IBootstrapOptions options: IBootstrapOptions) {
        console.log(options); // log twice!!!
    }
    */
}