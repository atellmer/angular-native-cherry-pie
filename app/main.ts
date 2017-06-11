import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { registerElement } from 'nativescript-angular/element-registry';

import app = require('application');
import fresco = require('nativescript-fresco');

import { AppModule } from './app.module';

registerElement('FrescoDrawee', () => require('nativescript-fresco').FrescoDrawee);
registerElement('CardView', () => require('nativescript-cardview').CardView);
registerElement('Ripple', () => require('nativescript-ripple').Ripple);

app.on(app.launchEvent, function (args) {
    if (args.android) {
      fresco.initialize();
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
