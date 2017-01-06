// Vendor
import './vendor';

// Core
import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

// Routes
import { appRoutes } from './app.routes';

// Modules
import { UIModule } from './components/ui-module/ui.module';

// Components
import { PhoneLayoutComponent } from './components/phone-layout';
import { TabletLayoutComponent } from './components/tablet-layout';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DumpComponent } from './components/dump/dump.component';

// Services
import { FakeUserService } from './shared/fake-user.service';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
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
    DumpComponent
  ],
  providers: [FakeUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
