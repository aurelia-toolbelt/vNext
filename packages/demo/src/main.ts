import Aurelia, {
  RouterConfiguration, JitHtmlBrowserConfiguration,/*, StyleConfiguration*/
} from 'aurelia';
import { MyApp } from './my-app';
// import  shared from 'bootstrap/dist/css/bootstrap.min.css';
import * as BootstrapV5Components from '@aurelia-toolbelt/bootstrap-v5';
import { BootstrapV5Configuration } from '../../bootstrap-v5-core';
import { RippleCustomAttribute } from '../../custom-attributes';

Aurelia
  // .register(StyleConfiguration.shadowDOM({
  //   // optionally add the shared styles for all components
  //   sharedStyles: [shared]
  // }))  
  .register(BootstrapV5Components, RippleCustomAttribute)
  .register(BootstrapV5Configuration.customize({
    enableRippleEffect: true
  }), JitHtmlBrowserConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
