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

export const Bootstrap = {
    customize(options: IBootstrapOptions) {
        return {
            register(container: IContainer) {
                const settings = { ...defaultOptions, ...options };
                return container.register(Registration.instance(IBootstrapOptions, settings));
            },
        };
    },
};