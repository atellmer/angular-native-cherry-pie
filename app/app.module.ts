// Vendor
import './vendor';

// Core
import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { StoreModule } from '@ngrx/store';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

// Routes
import { appRoutes } from './app.routes';

// Modules
import { UIModule } from './components/ui-module/ui.module';

// Containers
import { PanelContainerComponent } from './containers/panel';
import { AppbarContainerComponent } from './containers/appbar';

// Components
import { PhoneLayoutComponent } from './layouts/phone';
import { TabletLayoutComponent } from './layouts/tablet';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DumpComponent } from './components/dump/dump.component';
import { MessagePanelComponent } from './components/message-panel/message-panel.component';

// Services
import { FakeUserService } from './shared/fake-user.service';

import { UserActions } from './actions/user';
import { rootReducer } from './reducers';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    StoreModule.provideStore(rootReducer),
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    }),
    UIModule
  ],
  declarations: [
    AppComponent,
    PhoneLayoutComponent,
    TabletLayoutComponent,
    AppbarComponent,
    PanelComponent,
    CanvasComponent,
    DialogItemComponent,
    DumpComponent,
    PanelContainerComponent,
    AppbarContainerComponent,
    MessagePanelComponent
  ],
  providers: [
    FakeUserService,
    UserActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
