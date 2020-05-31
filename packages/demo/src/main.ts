import Aurelia, {
  RouterConfiguration,/*, StyleConfiguration*/
  JitHtmlBrowserConfiguration
} from 'aurelia';
import { MyApp } from './my-app';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.scss';

import * as BootstrapV4Components from '@aurelia-toolbelt/bootstrap-v4';
// import { BootstrapConfig } from '@aurelia-toolbelt/bootstrap-core';

Aurelia
  /*
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  */
  .register(RouterConfiguration, BootstrapV4Components, JitHtmlBrowserConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
