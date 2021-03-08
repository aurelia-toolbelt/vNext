import { IContainer } from '@aurelia/kernel';
import { AppTask, DI, Registration } from 'aurelia';
import { Size } from "../size/Size";
import { IInputOptions } from './InputOptions';

export interface IBootstrapV5Options {
    enableRippleEffect?: boolean;
    enableCssReboot?: boolean;
    defaultSize?: Size;
    enableLogging?: boolean;
    isRtl?: boolean;
    inputOptions?: IInputOptions;
}

const defaultOptions: IBootstrapV5Options = {
    enableRippleEffect: false,
    enableCssReboot: false,
    isRtl: false,
    enableLogging: false,
    defaultSize: Size.Medium,
    inputOptions: {
        floatLabel: false
    }
};

function configure(container: IContainer, config: IBootstrapV5Options = defaultOptions) {
    return container.register(
        AppTask.with(IContainer).hydrating().call(async cfg => {
            /*
            if (config.enableRealtimeDatabase) {
                const db = await import('firebase/database');
                cfg.register(Registration.instance(IFireBaseDatabase, db.database());
            }
            if (config.enableCssReboot) {
                await import('bootstrap/dist/css/bootstrap-reboot.min.css');
            }
            if (config.isRtl) {
                await import('bootstrap/dist/css/bootstrap.rtl.min.css');
            }
            if (!config.isRtl) {
                await import('bootstrap/dist/css/bootstrap.min.css');
            }*/
            Registration.instance(IBootstrapV5Options, config).register(container);
        })
    );
}
export const IBootstrapV5Options = DI.createInterface<IBootstrapV5Options>('IBootstrapV5Options');

export const BootstrapV5Configuration = {
    register(container: IContainer) {
        return configure(container);
    },
    customize(config: IBootstrapV5Options) {
        return {
            register(container: IContainer) {
                return configure(container, config);
            },
        };
    },
};
