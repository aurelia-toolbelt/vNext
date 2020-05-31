import Aurelia, {
  RouterConfiguration,/*, StyleConfiguration*/
  StyleConfiguration
} from 'aurelia';
import { MyApp } from './my-app';
import  shared from 'bootstrap/dist/css/bootstrap.min.css';

import * as BootstrapV4Components from '@aurelia-toolbelt/bootstrap-v4';


Aurelia
  
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  
  .register( BootstrapV4Components  )
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
   .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
