import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { StoreModule } from '@ngrx/store';

import { rootReducer } from '../reducers';
import { FakeUserService } from '../shared/services/fake-user.service';
import { UserActions } from '../actions/user';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    StoreModule.provideStore(rootReducer)
  ],
  exports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    StoreModule
  ],
  declarations: [],
  providers: [
    FakeUserService,
    UserActions
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
