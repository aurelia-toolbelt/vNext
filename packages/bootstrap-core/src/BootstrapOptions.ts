import { DI, IContainer, Registration } from '@aurelia/kernel';
import { BootstrapSize } from "./BootstrapSize";
import { IBootstrapInputOptions } from './BootstrapInputOptions';

export interface IBootstrapOptions {
    enableRippleEffect?: boolean;
    enableCssReboot?: boolean;
    defaultSize?: BootstrapSize;
    enableLogging?: boolean;
    inputOptions?: IBootstrapInputOptions;
};

const defaultOptions: IBootstrapOptions = {
    enableRippleEffect: false,
    enableCssReboot: false,
    enableLogging: false,
    defaultSize: BootstrapSize.Medium,
    inputOptions: {
        floatLabel: false
    }
};

export const IBootstrapOptions = DI.createInterface<IBootstrapOptions>('IBootstrapOptions').noDefault();

export const BootstrapV4Configuration = {
    customize(options?: IBootstrapOptions) {
        options = options || {};
        return {
            register(container: IContainer) {
                const settings = { ...defaultOptions, ...options };
                return Registration.instance(IBootstrapOptions, settings).register(container);
            },
        };
    },
};