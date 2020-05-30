import { BootstrapSize } from "./BootstrapSize";

export interface IBootstrapOptions {
    enableRippleEffect: boolean;
    // enableFloatLabel: boolean;
    enableCssReboot: boolean;
    defaultSize: BootstrapSize
};

const defaultOptions: IBootstrapOptions = {
    enableRippleEffect: false,
    // enableFloatLabel: false,
    enableCssReboot: false,
    defaultSize: BootstrapSize.Medium
};

export const IBootstrapOptions = DI.createInterface<IBootstrapOptions>('IBootstrapOptions').noDefault();

export const Bootstrap = {
    customize(options: IBootstrapOptions) {
        return {
            register(container: IContainer) {
                const settings = { ...defaultOptions, ...options };
                return container.register(Registration.instance(IBootstrapOptions, settings);
            },
        };
    },
};