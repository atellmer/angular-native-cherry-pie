import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import 'rxjs/add/operator/map';

import { ROUTES } from './app.routes';
import { TmPhoneLayoutComponent } from './components/phone-layout';
import { TmTabletLayoutComponent } from './components/tablet-layout';
import { TmAppComponent } from './app.component';
import { TmAppbarComponent } from './components/appbar';
import { TmPanelComponent } from './components/panel';
import { TmCanvasComponent } from './components/canvas';
import { TmAvatarComponent } from './components/avatar';
import { FakeUserService } from './shared/fake-user.service';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(ROUTES)
  ],
  declarations: [
    TmAppComponent,
    TmPhoneLayoutComponent,
    TmTabletLayoutComponent,
    TmAppbarComponent,
    TmPanelComponent,
    TmCanvasComponent,
    TmAvatarComponent
  ],
  providers: [FakeUserService],
  bootstrap: [TmAppComponent]
})
export class AppModule { }
