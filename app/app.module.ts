import './vendor';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { RoutingModule } from './routing';
import { HeaderModule } from './features/header';
import { MessengerModule } from './features/messenger';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RoutingModule,
    HeaderModule,
    MessengerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
