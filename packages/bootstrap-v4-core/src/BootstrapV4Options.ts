import { DI, IContainer, Registration } from '@aurelia/kernel';
import { BootstrapSize } from "./BootstrapV4Size";
import { IBootstrapV4InputOptions } from './BootstrapV4InputOptions';

export interface IBootstrapV4Options {
    enableRippleEffect?: boolean;
    enableCssReboot?: boolean;
    defaultSize?: BootstrapSize;
    enableLogging?: boolean;
    inputOptions?: IBootstrapV4InputOptions;
};

const defaultV4Options: IBootstrapV4Options = {
    enableRippleEffect: false,
    enableCssReboot: false,
    enableLogging: false,
    defaultSize: BootstrapSize.Medium,
    inputOptions: {
        floatLabel: false
    }
};

export const IBootstrapV4Options = DI.createInterface<IBootstrapV4Options>('IBootstrapOptions').noDefault();

export const BootstrapV4Configuration = {
    customize(options: IBootstrapV4Options) {
        return {
            register(container: IContainer) {
                const settings = { ...defaultV4Options, ...options };
                return container.register(Registration.instance(IBootstrapV4Options, settings));
            },
        };
    },
};