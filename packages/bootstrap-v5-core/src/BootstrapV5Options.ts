import { DI, IContainer, Registration } from '@aurelia/kernel';
import { BootstrapSize } from "./BootstrapV5Size";
import { IBootstrapV5InputOptions } from './BootstrapV5InputOptions';

export interface IBootstrapV5Options {
    enableRippleEffect?: boolean;
    enableCssReboot?: boolean;
    defaultSize?: BootstrapSize;
    enableLogging?: boolean;
    inputOptions?: IBootstrapV5InputOptions;
}

const defaultBootstrapV5Options: IBootstrapV5Options = {
    enableRippleEffect: false,
    enableCssReboot: false,
    enableLogging: false,
    defaultSize: BootstrapSize.Medium,
    inputOptions: {
        floatLabel: false
    }
};

export const IBootstrapV5Options = DI.createInterface<IBootstrapV5Options>('IBootstrapV5Options').noDefault();

export const BootstrapV5Configuration = {
    customize(options: IBootstrapV5Options) {
        return {
            register(container: IContainer) {
                const settings = { ...defaultBootstrapV5Options, ...options };
                return container.register(Registration.instance(IBootstrapV5Options, settings));
            },
        };
    },
};
