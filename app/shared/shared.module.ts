import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CommonModule } from '@angular/common';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { UIModule } from '../features/ui';


@NgModule({
  imports: [
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  exports: [
    NativeScriptModule,
    CommonModule,
    TNSFontIconModule,
    UIModule
  ],
  declarations: [],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
