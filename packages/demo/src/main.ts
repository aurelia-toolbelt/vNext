import Aurelia, { RouterConfiguration/*, StyleConfiguration*/ } from 'aurelia';
import { MyApp } from './my-app';
import * as Components from '@aurelia-toolbelt/bootstrap-v5';
import { BootstrapV5Configuration, Size } from '@aurelia-toolbelt/bootstrap-v5-core';
import { RippleCustomAttribute } from '@aurelia-toolbelt/custom-attributes';

// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.css';

Aurelia
  /*
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  */
  .register(Components, RippleCustomAttribute)
  .register(BootstrapV5Configuration.customize({
    enableRippleEffect: true,
    defaultSize: Size.Small
  }))
  .register(RouterConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();

