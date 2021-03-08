import { customElement } from "aurelia";
import template from './at-alert.html';
import { IBootstrapV5Options } from '@aurelia-toolbelt/bootstrap-v5-core';

@customElement({ template, name: 'at-alert' })
export class BootstrapAlert {
    constructor(@IBootstrapV5Options options: IBootstrapV5Options) {
        console.log(options);
    }
}