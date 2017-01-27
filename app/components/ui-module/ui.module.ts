// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';


// Components
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';


const COMPONENTS = [
  AvatarComponent,
  BadgeComponent,
  SearchBarComponent,
  IconButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    NativeScriptFormsModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class UIModule { }
