import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapV4Configuration } from '@aurelia-toolbelt/bootstrap-core';
import Aurelia, { JitHtmlBrowserConfiguration } from 'aurelia';
// import 'jquery/dist/jquery.js';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
Aurelia.register(BootstrapV4Configuration.customize({}), JitHtmlBrowserConfiguration);
export * from './src';