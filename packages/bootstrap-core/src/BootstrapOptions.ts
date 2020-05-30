import { DI, IContainer, Registration } from '@aurelia/kernel';
import { BootstrapSize } from "./BootstrapSize";

export interface IBootstrapOptions {
    enableRippleEffect?: boolean;
    enableCssReboot?: boolean;
    defaultSize?: BootstrapSize;
    inputOptions?: IBootstrapInputOptions;
};

export interface IBootstrapInputOptions {
    floatLabel?: boolean;
}

const defaultOptions: IBootstrapOptions = {
    enableRippleEffect: false,
    enableCssReboot: false,
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