import { customElement } from "aurelia";
import template from './at-alert.html';
import { IBootstrapV4Options } from '@aurelia-toolbelt/bootstrap-v4-core';

@customElement({ template, name: 'at-alert' })
export class BootstrapAlert {
    constructor(@IBootstrapV4Options options: IBootstrapV4Options) {
        console.log(options);
    }

}