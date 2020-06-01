import Aurelia, {
  RouterConfiguration, JitHtmlBrowserConfiguration,/*, StyleConfiguration*/
} from 'aurelia';
import { MyApp } from './my-app';
// import  shared from 'bootstrap/dist/css/bootstrap.min.css';
import * as BootstrapV4Components from '@aurelia-toolbelt/bootstrap-v4';
import { BootstrapV4Configuration } from '../../bootstrap-v4-core';
import { RippleCustomAttribute } from '../../custom-attributes';

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))  
  .register(BootstrapV4Components, RippleCustomAttribute)
  .register(BootstrapV4Configuration.customize({
    enableRippleEffect: true
  }), JitHtmlBrowserConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
