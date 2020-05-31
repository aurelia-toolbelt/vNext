import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapConfig } from '@aurelia-toolbelt/bootstrap-core';
import Aurelia, { JitHtmlBrowserConfiguration } from 'aurelia';
// import 'jquery/dist/jquery.js';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

Aurelia.register(BootstrapConfig.customize(), JitHtmlBrowserConfiguration);


export * from './src';